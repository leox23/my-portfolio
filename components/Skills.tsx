import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center w-100 xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center
      xl:justify-center"
    >
      <div
        className="
      mt-[10vh] mb-[-8vh] 
      sm:mt-[-2vh] sm:mb-[-20vh]
      md:mt-[-4vh] md:mb-[-16vh] 
      lg:mt-0 lg:mb-[-10vh] 
      xl:mt-6 xl:mb-[5vh]
      "
      >
        <h3
          className="uppercase tracking-[20px] text-gray-500 
        text-2xl"
        >
          Skills
        </h3>

        <h3
          className="uppercase tracking-[3px] text-gray-500 
        text-sm
        mt-[2vh] 
        mb:pb-0"
        >
          Hover over a skill for current profieciency and details
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
