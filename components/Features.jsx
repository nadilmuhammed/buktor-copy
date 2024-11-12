import React, { useRef } from "react";
import icon1 from "../public/logo/web.png";
import icon2 from "../public/logo/calendar.png";
import icon3 from "../public/logo/profile.png";
import icon4 from "../public/logo/valid.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  const data = [
    {
      id: 1,
      title: "Booking Website",
      icon: icon1,
      description:
        "Get a ready-to-use booking site immediately after signing up with Buktor. Buktor",
    },
    {
      id: 2,
      title: "WhatsApp Integration",
      icon: icon2,
      description:
        "Book appointments and process payments seamlessly through WhatsApp.",
    },
    {
      id: 3,
      title: "Automated Reminders",
      icon: icon3,
      description:
        "Send appointment reminders automatically via WhatsApp and voice calls.",
    },
    {
      id: 4,
      title: "Campaigns & AI-Driven Responses",
      icon: icon4,
      description:
        "Run marketing campaigns and provide round-the-clock AI responses to inquiries.",
    },
  ];
  return (
    <div className="mt-48">
      <motion.h1
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[22px] sm:text-3xl font-bold text-gray-800"
      >
        Simplify patient bookings <br /> with powerful features
      </motion.h1>
      <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((items, index) => {
          return (
            <motion.div
              key={items.id}
              initial={{ y: "5%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger animations
              }}
              className={`flex flex-col items-center justify-start text-center gap-5 px-9 pt-8 h-[310px] overflow-hidden transform hover:-translate-y-1 rounded shadow-md hover:shadow-xl transition-all duration-200 ${
                items.id === 2 || items.id === 4 ? "bg-gray-100" : ""
              }`}
            >
              <Image src={items.icon} width={50} height={50} alt="icons" />
              <h4 className="text-lg font-bold text-gray-800">{items.title}</h4>
              <p className="text-[15px] font-semibold">{items.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
