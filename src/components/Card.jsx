import React from "react";
import { Link } from "react-router-dom";


const Card = ({ image, date, description }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden hover:shadow-[5px_5px_3px_grey]  duration-300">
      <div>
        <img src={image} alt="img" className="w-full grayscale-[100%] hover:grayscale-0 duration-300 aspect-[360/268] object-cover"/>
      </div>
      <div className="bg-black px-4 pt-[25px] pb-[30px]">
        <p className="text-white text-[12px] mb-1">{date}</p>
        <p className="text-white text-[20px] mb-2">{description}</p>
        {/* <a className="text-[#00E1FF] text-[14px] font-thin" >READ MORE</a> */}
        <Link to={"./"} className="text-[#00E1FF] text-[14px] font-thin" >READ MORE</Link>
      </div>
    </div>
  );
};

export default Card;
