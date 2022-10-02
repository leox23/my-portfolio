import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-20 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/407px-Netflix_icon.svg.png"
        alt="img de muestra"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO de X</h4>
        <p className="font-bold text-2xl mt-1">Leosleos company</p>
        <div className="flex space-x-2 my-2">
            <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="tech icon" />
            <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="tech icon" />
            <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="tech icon" />
            <img 
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png" alt="tech icon" />
        </div>
        <p>Started work... - Ended... </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
        </ul>
      </div>


    </article>
  );
}
