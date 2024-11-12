import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import React from "react";
import { FaPhone, FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  MdChevronRight,
  MdDateRange,
  MdOutlineDone,
} from "react-icons/md";
import { SlLayers } from "react-icons/sl";

const DocHero = ({ doctor }) => {
  return (
    <>
      <div className='bg-[url("/docpage/bg-image.jpg")] bg-cover object-top relative'>
        <div className="flex justify-center items-center min-h-[500px] md:min-h-[450px] text-gray-100 bg-black/20">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-10 mt-14">
            <div className="place-items-center">
              <h4 className="text-4xl md:text-5xl font-bold">
                {doctor.business.name}
              </h4>
              <p className="text-xl font-bold">{doctor?.business?.title}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="place-items-center space-y-1">
                <p className="text-sm">Scan the QR code for booking</p>
                <QRCodeCanvas
                  value={`https://buktor.com/booking/${doctor.business.slug}`}
                  size={128}
                  className="p-1 bg-white rounded"
                />
              </div>
              <p>Or</p>
              <Link
                href={`https://buktor.com/booking/${doctor.business.slug}`}
                target="_blank"
                className="flex items-center font-bold gap-1 bg-blue-500 px-5 py-3 rounded-full"
              >
                <MdDateRange size={20} />
                Book Now
                <MdChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 sm:mx-12 lg:mx-16 xl:mx-24">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h4 className="text-2xl font-bold text-gray-800">About</h4>
            <div className="space-y-2">
              <Link
                href={`mailto:${doctor.business.email}`}
                className="flex gap-3 items-center font-bold"
              >
                <FaTelegramPlane size={18} />
                <span className="text-primary hover:text-primary/80">{doctor.business.email}</span>
              </Link>
              {doctor.business?.phone && (
                <p className="flex gap-3 items-center">
                  {" "}
                  <FaPhone />
                  {doctor.business?.phone}
                </p>
              )}
            </div>
          </div>

          {/* Buisness days */}
          {/* <div>
            <h4 className="text-2xl font-bold text-gray-800">Business Days</h4>
            <div className="space-y-1 mt-5">
              {doctor.buisness_days.map((items) => {
                const Icon =
                  items.status === "Open" ? MdOutlineDownloadDone : IoIosClose;
                return (
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="">
                      <Icon
                        size={30}
                        className={`${
                          items.status === "Open"
                            ? "bg-green-100 text-green-500"
                            : "bg-red-100 text-red-500"
                        }  rounded-full p-1`}
                      />
                    </span>
                    <p>{items.day}</p>
                    <p>({items.time})</p>
                    {"-"}
                    <p
                      className={
                        items.status === "Open"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {items.status}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-20 bg-gray-100 py-20">
        <div className="mx-5 sm:mx-12 lg:mx-16 xl:mx-24">
          <h4 className="text-3xl text-center font-bold text-gray-800">
            Services
          </h4>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            {doctor.services.map((items) => (
              <div
                key={items.service_id}
                className="bg-gray-50 px-5 lg:px-10 py-10 w-full h-[450px] overflow-hidden rounded shadow-md flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <SlLayers />
                    {items.name}
                  </h4>
                  <hr className="my-2" />
                  <div>
                    <p className="font-[700]">Available Days</p>
                    <div className="space-y-1 mt-1">
                      {items.working_days.map((item, index) => {
                        const dayNames = [
                          "Sunday",
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                        ];
                        return (
                          <div key={index}>
                            <p className="flex items-center gap-2 font-[500] whitespace-nowrap">
                              <MdOutlineDone
                                size={30}
                                className={`bg-green-100 text-green-500 rounded-full p-1`}
                              />
                              {dayNames[item.day]}: ({item.start} - {item.end})
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <Link
                    href={`https://buktor.com/booking/${doctor.business.slug}`}
                    target="_blank"
                    className="bg-primary text-white px-5 py-2 rounded-full flex items-center"
                  >
                    Book Now
                    <IoIosArrowRoundForward size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DocHero;
