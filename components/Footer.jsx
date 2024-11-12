import { menuData } from "@/lib/menuData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const pagesData = menuData.filter((items) => items.name === "Pages");
  return (
    <div>
      <footer>
        <div className="flex justify-between flex-wrap gap-10">
          <div className="space-y-5">
            <div className="space-y-2">
              <Image
                src={"/logo/buktor-logo.png"}
                width={130}
                height={100}
                alt={"Logo"}
              />
              <p className="text-[15px] font-[500]">
                Expert Care, Effortless Scheduling.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link href={"https://www.facebook.com/buktorcare"} className="hover:text-primary">
              <FaFacebookSquare size={28} />
              </Link>
              <Link href={"https://www.instagram.com/buktorcare"} className="hover:text-primary">
              <FaInstagram size={28} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Services</h4>
            <ul className="space-y-2 mt-5 text-sm font-[500]">
              <li className="hover:text-primary">
                <Link href={"/pricing"}>Pricing</Link>
              </li>
              <li className="hover:text-primary font-[500]">
                <Link href={"/pricing"}>FAQs</Link>
              </li>
              <li className="hover:text-primary font-[500]">
                <Link href={"/pricing"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-700 font-bold">Pages</h4>
              {pagesData.map((items) => {
                return (
                  <ul key={items.id} className="space-y-2 mt-5 text-sm">
                    {items.submenu.map((sub) => (
                      <li key={sub.id} className="hover:text-primary font-[500]">
                        <Link href={sub.url}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                );
              })}
          </div>
        </div>

        <hr className="my-3"/>

        <div className="text-center mb-3">
          <p className="font-semibold">&copy; {new Date().getFullYear()} Cblu Digital. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
