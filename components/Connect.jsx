import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-center">
      <div className="w-full">
        <div className="w-[90%] space-y-5 ">
          <motion.h4
          initial={{ y: "5%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl font-bold text-gray-800">
            Connect with your patients all around the world using zoom meeting
          </motion.h4>
          <motion.p
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-semibold sm:w-[80%]">
            Integrate with Zoom, So you can easily manage your Virtual
            Consultation right from Buktor.
          </motion.p>
        </div>
      </div>
      <motion.div
      initial={{ x: "100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full mt-10 md:mt-0">
        <Image
          src={"/homepage/connect.png"}
          width={0}
          height={0}
          sizes="100%"
          alt="Office"
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default Connect;
