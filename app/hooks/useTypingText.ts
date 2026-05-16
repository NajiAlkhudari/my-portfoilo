"use client";

import { useEffect, useState } from "react";

type UseTypingTextOptions = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

function getPrefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useTypingText(
  words: string[],
  {
    typingSpeed = 90,
    deletingSpeed = 45,
    pauseDuration = 1600,
  }: UseTypingTextOptions = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) {
      return;
    }

    if (getPrefersReducedMotion()) {
      setDisplayText(words[0]);
      return;
    }

    const currentWord = words[wordIndex % words.length];
    const reachedWordEnd = displayText === currentWord;
    const clearedWord = displayText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && reachedWordEnd) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && clearedWord) {
          setIsDeleting(false);
          setWordIndex((currentIndex) => (currentIndex + 1) % words.length);
          return;
        }

        const nextLength = isDeleting
          ? displayText.length - 1
          : displayText.length + 1;

        setDisplayText(currentWord.slice(0, nextLength));
      },
      reachedWordEnd && !isDeleting
        ? pauseDuration
        : isDeleting
        ? deletingSpeed
        : typingSpeed
    );

    return () => window.clearTimeout(timeout);
  }, [
    deletingSpeed,
    displayText,
    isDeleting,
    pauseDuration,
    typingSpeed,
    wordIndex,
    words,
  ]);

  return displayText;
}
