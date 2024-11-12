import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"

const Payment = () => {
  return (
    <div className="mt-20 flex flex-col-reverse md:flex-row items-center gap-5 md:gap-16">
      <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full">
        <Image
          src={"/homepage/payment.png"}
          width={0}
          height={0}
          sizes="100%"
          alt="accept"
          className="w-full object-cover"
        />
      </motion.div>
      <div className="w-full ">
        <div className="space-y-7 md:pl-12">
          <motion.h4
          initial={{ y: "5%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl font-bold text-gray-800">
            Accept Online / Offline Payments from your Patients
          </motion.h4>
          <motion.p
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-semibold sm:w-[80%]">
            Easily process your payments online in a secure manner, Select from
            Payment Processors like PayPal, Stripe and offline.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
