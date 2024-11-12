import React, { useEffect, useRef, useState } from "react";
import { menuData } from "@/lib/menuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const outsideRef = useRef();
  const [submenu, setSubmenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
    setMobileSubmenu(null);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const submenuVarients = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleMobileSubmenu = (id) => {
    setMobileSubmenu((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, outsideRef]);

  return (
    <div className="py-5 fixed left-0 right-0 mx-5 sm:mx-12 lg:mx-16 xl:mx-24 bg-white z-30">
      <nav className="flex justify-between items-center">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={"/"}>
            <Image
              src={"/logo/buktor-logo.png"}
              width={130}
              height={125}
              alt={"logo"}
            />
          </Link>
        </motion.div>
        <div className="hidden md:block">
          <div className="flex items-center gap-5">
            {menuData.map((items, index) => (
              <div key={items.id}>
                {!items.submenu ? (
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: index * 0.2 }}
                  >
                    <Link
                      href={items.url}
                      className={`font-[600] hover:text-primary ${
                        isActive(items.url) && "text-primary"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{items.name}</span>
                    </Link>
                  </motion.div>
                ) : (
                  <div
                    className="relative"
                    onMouseEnter={() => items.submenu && setSubmenu(items.id)}
                    onMouseLeave={() => setSubmenu(null)}
                  >
                    <motion.span
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: index * 0.2 }}
                      className={`cursor-pointer font-[600] hover:text-primary flex items-center gap-1 ${
                        items.submenu.some((sub) => isActive(sub.url)) &&
                        "text-primary"
                      }`}
                    >
                      {items.name}
                      <MdOutlineKeyboardArrowDown
                        className={`${
                          submenu && "rotate-180"
                        } transition-all duration-300`}
                      />
                    </motion.span>
                    <div className="absolute right-0 shadow-lg">
                      <AnimatePresence>
                        {submenu && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            transition={{ duration: 0.3 }}
                            className=" bg-white rounded py-3"
                          >
                            {items.submenu.map((sub) => (
                              <Link
                                key={sub.id}
                                href={sub.url}
                                className={`flex flex-col p-2 px-6 hover:bg-primary/5 whitespace-nowrap text-sm font-semibold hover:text-primary ${
                                  isActive(sub.url) && "text-primary"
                                }`}
                              >
                                <span>{sub.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <motion.button
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
          onClick={handleMobileOpen}
        >
          <HiOutlineMenu size={30} />
        </motion.button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              transition={{ duration: 0.3 }}
              className="absolute top-20 left-0 w-full"
              ref={outsideRef}
            >
              <div
                className="bg-white space-y-3 font-[500] px-8 py-10 rounded-lg"
                style={{ boxShadow: "0 0 30px rgba(83, 88, 93, .15)" }}
              >
                {menuData.map((menu) => (
                  <div key={menu.id} className="">
                    {!menu.submenu ? (
                      <Link
                        href={menu.url}
                        onClick={() => setMobileOpen(false)}
                        className={
                          isActive(menu.url) && "text-primary font-semibold"
                        }
                      >
                        {menu.name}
                      </Link>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={() => handleMobileSubmenu(menu.id)}
                          className={`flex justify-between items-center w-full ${
                            menu.submenu.some((sub) => isActive(sub.url))
                              ? "!text-primary font-semibold"
                              : ""
                          }`}
                        >
                          <span>{menu.name}</span>
                          <MdOutlineKeyboardArrowDown
                            size={20}
                            className={`${
                              mobileSubmenu && "rotate-180"
                            } transition-all duration-300`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileSubmenu && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={submenuVarients}
                              transition={{ duration: 0.3 }}
                              className="mt-3 space-y-3"
                            >
                              {menu.submenu.map((sub) => (
                                <div key={sub.id} className="px-3">
                                  <Link
                                    href={sub.url}
                                    onClick={() => setMobileOpen(false)}
                                    className={
                                      isActive(sub.url) && "text-primary"
                                    }
                                  >
                                    {sub.name}
                                  </Link>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
