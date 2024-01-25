import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Reusable Components",
          description:"Here you will find a collection of reusable components that I’ve personally crafted. Each component is designed with versatility and efficiency in mind, ensuring they can be seamlessly integrated into a variety of projects",
    image: "/component.png",
    github: "https://github.com/NajiAlkhudari/componentReusable-and-basic-test",
    demo:"https://component-reusable.vercel.app/",
  },
  {
    name: "A Class Transportation",
          description:
          "A Class Transportation is a web app that Automation of the operations the Transportation Management for University Of Kalamoon private.",
    image: "/Admin.png",
    github: "https://github.com/NajiAlkhudari/React-js-App-",
  
 
  },
  {
    name: "M.B.K for Salesperson Mangment System",
          description:
            "M.B.K  is a web app that Facilitate the operations of drug representatives using a multi-platform application",
    image: "/mbk.png",
    github: "https://github.com/NajiAlkhudari",
  

  },
  {
    name: "KalaBus",
    description: "KalaBus is a mobile app that built by react native , reads the QrCode of each student to complete the transfer process correctly .",
    image: "/one1.jpg",
    github: "https://github.com/NajiAlkhudari/React-Native-App",
   

  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-900 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.demo && (
                        <Link href={project.demo} target="_blank">
                          <button 
                            className="hover:-translate-y-1 transition-transform cursor-pointer border rounded-md p-1 "
                          >
                            Demo
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
