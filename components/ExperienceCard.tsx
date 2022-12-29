import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col !justify-center rounded-lg items-center flex-shrink-0 snap-center bg-[#292929]  overflow-hidden 
    py-4 px-5 grow-[2] space-y-[5vh]
    w-[100vw] md:w-[600px] xl:w-[900px] 
    sm:w-[100%] sm:px-8
    md:pt-14 md:pw-20
    lg:pt-[8vh]
    xl:mt-0 xl:px-4 min-h-fit
    2xl:p-10"
    >
      {/*hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-20 */}
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full object-cover object-center
        w-[16vh] h-[16vh] mb-[2vh]
        mx:w-32 mx:h-32
        sm:w-52 sm:h-52
        lg:w-40 lg:h-40
        xl:w-[150px] xl:h-[150px] 
        2xl:w-[200px] 2xl:h-[200px] 2xl:mt[0px] 2xl:mb-0"
        src={urlFor(experience?.companyImage).url()}
        alt="freelancer image"
      />
      <div
        className="px-0 space-y-[calc(2vh-5px)]
        md:px-10
        xl:pl-16"
      >
        <h4
          className="font-light
        -mt-4
        text-2xl 
        mx:text-4xl
        xl:-mt-10
        2xl:mt-0"
        >
          {experience.jobTitle}
        </h4>
        <p
          className="font-bold 
        text-xl mt-1
        mx:text-3xl"
        >
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              width="100"
              height="100"
              key={technology._id}
              className="h-5 w-5 mt-1
                mx:h-8 mx:w-8"
              src={urlFor(technology.image).url()}
              alt="tech icon"
            />
          ))}
        </div>
        <p className="py-1 mx:text-xl">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul
          className="list-disc overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80
        ml-3 pr-5 text-lg space-y-2 
        mx:text-2xl
        lg:text-[1.3rem]
        xl:text-[1.1rem]
        2xl:text-2xl"
        >
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
