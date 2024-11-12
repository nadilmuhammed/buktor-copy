import React, { useState } from "react";
import { faqData } from "@/lib/faq";
import { FaAngleDown } from "react-icons/fa";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActive = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-600 text-center">
        Frequently Asked Questions
      </h1>

          <div  className="flex justify-center mt-14">
      <div className="w-full max-w-3xl space-y-5">
        {faqData.map((items) => (
            <div key={items.id} className="p-5 border border-primary/20 shadow-md rounded-lg">
                <button className=" flex justify-between items-center gap-5 w-full text-primary font-semibold" onClick={() => handleActive(items.id)}>
                  <span className="text-start">{items.question}</span>
                  <FaAngleDown className="" />
                </button>

                <div className={`${activeIndex === items.id ? "max-h-screen opacity-100 mt-5" : "max-h-0 opacity-0"} transition-all duration-500 ease-in-out overflow-hidden`}>
                    <hr className="border-t border-primary/20"/>
                    <div className=" mt-5">
                        <p>{items.answer}</p>
                    </div>

                </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
