import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";
import Image from 'next/image'

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0
    mx:!px-[20px]
    ">
      <h3 className="uppercase tracking-[20px] text-gray-500 !text-center
      text-2xl mt-[12vh] -mb-[calc(16vh-50px)]
      mx:text-3xl mx:mt-20 mx:mb-0
      md:pt-32 md:mt-10
      lg:pt-6 lg:mt-20
      xl:pb-[14vh] xl:mt-[10vh] xl:pt-[calc(10vh-50px)]
      2xl:pt-10">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 items-center
      p-0 
      grow-[2]
      lg:-mt-14
      xl:-mt-[16vh]
      ">
        {projects.map((project, i) => (
          <div className="card w-screen  min-h-fit flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center x
          !p-0 grow-[2]
          sm:p-20 
          md:p-44 md:space-y-1" key={project._id}>
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="object-cover w-[60%] mx:max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-[50vh]"
              src={ urlFor(project.image).url() }
              alt="multiplatform image"
            />

            <div className="space-y-2 sm:space-y-10 px-0 md:px-10 max-w-6xl  ">
              <h4 className="font-semibold text-center
              text-3xl 
              mx:text-4xl mx:py-5
              2xl:text-5xl
              ">
                <span className="underline decoration-[#F7AB0A]">
                  Case Study {i + 1} {" of "} {projects.length}:
                </span>{" "}
                {project?.title} 
                {project?.linkToBuild ? <span className="text-[80%]"> ➚</span> : ""}
              </h4>
              <div className="techs-container flex items-center space-x-2 justify-center !m-0 !mt-2">
                {project?.texhnologies.map((technology) => (
                  <Image
                    width="100"
                    height="100"
                    className="
                    w-6 h-6
                    mx:w-10 mx:h-10
                    sm:w-10 sm:h-10"
                    src={urlFor(technology.image).url()} 
                    alt="tech logo" 
                    key={technology._id}
                  />
                ))}
              </div>

              <p className="project-summary text-center 
              text-lg 
              ms:px-2
              mx:text-3xl mx:px-6 mx:py-4
              md:text-lg md:text-left
              lg:text-xl lg:!mt-2
              xl:!mt-4
              2xl:!mt-8 2xl:text-2xl">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
