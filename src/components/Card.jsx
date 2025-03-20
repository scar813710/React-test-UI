import React from "react";

const Card = ({ image, date, description }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden hover:shadow-[5px_5px_3px_grey]  duration-300">
      <div>
        <img src={image} alt="img" className="w-full" />
      </div>
      <div className="bg-black px-4 pt-[25px] pb-[30px]">
        <p className="text-white text-[12px] mb-1">{date}</p>
        <p className="text-white text-[20px] mb-2">{description}</p>
        <p className="text-[#00E1FF] text-[14px] font-thin">READ MORE</p>
      </div>
    </div>
  );
};

export default Card;
