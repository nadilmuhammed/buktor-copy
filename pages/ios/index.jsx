import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ios = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-600 text-center">
        iOS App
      </h1>

      <div className="mt-20">
        <h4 className="text-2xl font-semibold text-gray-800">
          Download Buktor Pro App!
        </h4>
        <div className="mt-5">
          <p>Get access to exclusive features by downloading our mobile app.</p>
          <div className="w-fit mt-3">
            <Link href={"https://apps.apple.com/in/app/buktor-pro/id6497949590"} target="_blank" className="">
              <Image
                src={"/logo/ios.png"}
                width={0}
                height={0}
                sizes="100%"
                alt="ios"
                className="w-[160px] object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ios;