import { deletePolicy } from "@/lib/privacy";
import React from "react";

const DeleteAccount = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-700">
        Privacy policy
      </h1>

      <div className="flex justify-center mt-20">
        <div className="w-full max-w-3xl">
          <div className="space-y-14">
            {deletePolicy.map((items) => (
              <div key={items.id} className="space-y-3">
                <h4 className="text-2xl font-semibold text-gray-700">
                  {items.title}
                </h4>
                {items?.content?.map((data) => (
                  <div key={data.id} className="space-y-1">
                    <h4 className="text-lg font-[700] text-gray-600">
                      {data?.title}
                    </h4>
                    <p className="font-[500]">{data.description}</p>
                    <ul className="list-disc space-y-2 ml-5">
                      {data?.list?.map((items) => (
                        <li key={items.id} className="font-[500]">
                          <span className="font-[700] text-gray-600">
                            {items?.heading}
                          </span>{" "}
                          <span>{items.data}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
