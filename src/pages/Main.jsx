import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const cards = [
  {
    image: "/img/1.png",
    date: "03.12.22",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/img/2.jpeg",
    date: "03.12.22",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/img/3.png",
    date: "03.12.22",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Main = () => {
  return (
    <div className="bg-gradient-to-r from-[#6B2C83] to-[#150E43] md:px-[120px] px-10 py-[76px]">
      <div className="w-full flex justify-between py-7 items-end">
        <p className="text-[36px] text-white flex gap-2"><span className="sm:block hidden">Featured </span> Articles</p>
        <Link to={"./"} className="text-[18px] text-white md:block hidden font-thin">VIEW ALL</Link>
      </div>
      <hr className="bg-white" />
      <div className="w-full grid grid-cols-1 gap-[59px] pt-[50px] lg:grid-cols-3 pb-[40px]">
        {cards.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
