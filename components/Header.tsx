import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duation: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duation: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor pointer"
      >
        <SocialIcon
          href="#contact"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        
        <a href="#contact" className="cursor-pointer flex items-center justify-center">
            <p 
              className="only:uppercase hidden md:inline-flex text-sm text-gray-400 ">
              Get In Touch
            </p>
        </a>
      </motion.div>
    </header>
  );
}
