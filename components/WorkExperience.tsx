import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";


type Props = {
  experiences : Experience[]
};

export default function WorkExperience({experiences}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}

      className="flex relative overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center h-screen
      sm:px-5
      xl:pt-0"
      >
        <h3 className="uppercase tracking-[20px] text-gray-500 
        text-md
        mt-[11vh] mb-[2vh] 
        mx:text-2xl mx:mt-[10vh] mx:mb-[1vh]
        lg:mt-[10vh]
        
        2xl:top-12">
            Experience
        </h3>

        <div className="w-full flex justify-center space-x-5  overflow-x-hidden
        p-10 py-5 grow-[2]">
          {/*overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80*/}
            {experiences?.map(experience => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
        </div>

      </motion.div>
  );
}
