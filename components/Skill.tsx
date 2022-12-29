import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ diration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        alt="tech logo"

        className="rounde object-contain filter group-hover:grayscale transition duration-300 ease-in-out
        w-16 h-16 !p-0
        mx:!w-20 mx:!h-20
        md:!w-24 md:!h-24 
        lg:!w-20 lg:!h-20
        xl:!w-[calc(96px+1vw-24px)] xl:!h-[calc(96px+1vw-24px)]"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded z-20
      h-[100%] w-[100%] ">
        <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">
                {skill.progress + "%"}
            </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
