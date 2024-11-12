import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full space-y-2">
        <motion.p
        initial={{y: "100%", opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 0.8}}
        className=" text-[12px] font-bold text-primary px-5 py-1 rounded-full bg-gray-200 w-fit">
          Empower Your Practice with Buktor
        </motion.p>
        <motion.h1
        initial={{y: "100%", opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 1}}
        className="text-[33px] sm:text-[42px] md:text-[50px] font-extrabold leading-tight md:leading-[65px] text-gray-800">Are you struggling to manage patient bookings?</motion.h1>
        <motion.p
        initial={{y: "100%", opacity: 0}}
        animate={{y:0, opacity: 1}}
        transition={{duration: 1.2}}
        className="mt-3 sm:w-[85%] font-[500]">
          Simplify appointment scheduling, enhance patient interactions, and
          broaden your global reach - all through a single innovative platform,
          Buktor. It makes appointments and payments via WhatsApp easy, ensuring
          seamless patient engagement. With our advanced AI, we handle patient
          queries around the clock, and our teleconsultation feature allows you
          to conduct consultations from anywhere, guaranteeing uninterrupted
          care.
        </motion.p>
      </div>
      <motion.div
      initial={{x: "100%", opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.8}}
      className="w-full mt-16 md:mt-0">
        <Image
        src="/homepage/hero.jpg"
        width={0}
        height={0}
        sizes="100%"
        alt="hero-image"
        className="w-full"
        priority
        />
      </motion.div>
    </div>
  );
};

export default Hero;
