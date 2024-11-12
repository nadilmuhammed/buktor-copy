import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";

const CommonUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const handleClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);


  return (
    <div className="fixed bottom-5 right-5 md:right-10 z-30">
      <button
        type="button"
        onClick={handleClick}
        aria-label="Scroll to top"
        className={`p-2 rounded-full bg-[#f1f0ed] transition-opacity duration-300 group shadow-md ${
          isVisible ? 'opacity-100 hover:bg-secondary' : 'opacity-0'
        }`}
      >
        <FaAngleUp size={20} className="text-primary" />
      </button>
    </div>
  );
};

export default CommonUpButton;
