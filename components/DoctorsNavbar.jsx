import React, { useState } from "react";
import { docMenu } from "@/lib/menuData";
import { details } from "@/lib/docData";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const DoctorsNavbar = ({ slug }) => {
  const [open, setOpen] = useState(false);
  const currentDocData = details.find((doc) => doc.business.slug === slug);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="absolute top-0 left-0 z-10 right-0 mx-5 sm:mx-12 lg:mx-16 xl:mx-24 my-3 text-gray-100 font-semibold">
      <div className="flex justify-center">
      <nav className="flex justify-between items-center w-full max-w-[1440px]">

        <Link href={`/${slug}`} className="px-5 py-2 rounded-full bg-blue-900 text-lg">
          {currentDocData.business.name}
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {docMenu.map((items) => (
              <li key={items.id} className="">
                <Link href={`${items.url}/${slug}`}>{items.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <IoClose size={30} /> : <LuMenu size={30} />}
          </button>

          <AnimatePresence>

          {open && (
            <motion.div
            initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.3 }}
            className="absolute left-0 w-full">
              <ul className="flex flex-col gap-5 p-5 bg-blue-900 rounded-lg mt-3">
                {docMenu.map((items) => (
                  <li key={items.id} className="">
                    <Link href={`${items.url}/${slug}`}>{items.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default DoctorsNavbar;
