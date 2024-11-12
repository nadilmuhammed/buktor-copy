import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Office = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center">
      <div className="space-y-5 w-full">
        <motion.h4
          initial={{ y: "5%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl font-bold text-gray-800"
        >
          24/7 Front Office Experience
        </motion.h4>
        <motion.p
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-semibold sm:w-[80%]"
        >
          Buktor’s platform functions like a 24/7 front office, offering
          patients round-the-clock access to essential services. Patients can
          book or reschedule appointments, submit inquiries, access location
          maps, and review their past and upcoming appointments at their
          convenience. This significantly reduces front office and
          administrative stress by automating routine tasks, allowing patients
          to manage their healthcare needs independently. Fully synchronized in
          real-time, the system ensures patients always have the latest
          information, enhancing their experience and streamlining your
          practice’s operations.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full mt-10 md:mt-0"
      >
        <Image
          src={"/homepage/office.png"}
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

export default Office;
