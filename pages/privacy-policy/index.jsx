import { privacyData } from "@/lib/privacy";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-700">
        Privacy policy
      </h1>

      <div className="flex justify-center mt-20">
        <div className="w-full max-w-3xl space-y-10">
          {privacyData.map((items) => (
            <div key={items.id} className="space-y-3">
              <h4 className="text-xl font-semibold text-gray-800">
                {items?.title}
              </h4>
              {items?.content.map((con) => (
                <div key={con.id}>
                  <h4 className="font-semibold text-[18px] text-gray-600">{con?.title}</h4>
                  <p className="font-[500]">{con?.description}</p>
                  <div className="mt-3 ml-2">
                    {con?.list?.map((data, index) => (
                      <div key={index} className="">
                        <p className="font-[500]">{data.data}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
