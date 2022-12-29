import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col  h-screen text-center w-100 px-10 !justify-evenly !items-center
      ms:px-2
      sm:px-12 
      md:text-left relative md:flex-row md:!pt-20
      lg:px-12
      xl:pt-[10vh] xl:!justify-center
      2xl:px-24 "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 
      pt-10
      ms:text-xl ms:pl-[5vw]
      mx:text-4xl mx:pt-8
      md:absolute md:top-[22vh]
      lg:top-12
      xl:top-16 xl:text-3xl
      2xl:top-20 ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          durarion: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="about image"
        className="flex-shrink-0 rounded-full object-cover 
        ms:w-[25vh] ms:h-[25vh]
        mx:w-52 mx:h-52
        sm:w-56 sm:h-56
        md:mb-0 md:rounded-lg md:w-64 md:h-[400px] md:bg-[center_bottom]
        xl:w-[350px] xl:h-[500px]  
        2xl:w-[500px] 2xl:h-[700px]"
      />

      <div className="space-y-10 px-0 
      md:px-10 
      xl:w-[50%] 
      2xl:w-[800px]">
        <h4 className="text-4xl font-semibold 
        ms:text-2xl
        mx:text-3xl
        sm:text-5xl
        md:mb-6 md:text-4xl
        xl:w-[110vw] xl:max-w-3xl
        ">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base 
        ms:text-sm ms:!mt-2 
        mx:text-xl mx:!mt-4
        md:text-sm
        lg:text-xl lg:w-[55vw]
        xl:text-lg xl:w-[45vw] xl:max-w-3xl">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
