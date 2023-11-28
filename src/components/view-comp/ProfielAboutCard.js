import React from "react";
import { ReactComponent as PersonIcon } from "../../assets/PersonIcon.svg";
export default function ProfileAboutCard({title , cardItem}) {
  return (
    <div className="px-6 flex justify-center items-center mt-6">
      <div className="container mx-auto flex items-center bg-[#191A1E] py-6 rounded-lg border border-[#61d1815b]">
        <div className="flex flex-col justify-between items-center w-full px-8 md:flex-row ">
          <div className="flex items-center ">
            <div>
            <div className="flex gap-2 items-center">
                <PersonIcon />
              <div className="leading-snug text-3xl text-[#fff] font-bold">
              {title}
              </div>
              </div>
              {cardItem}
              <p className="text-[#ffffff70] text-sm">
              I'm Cam! A highly motivated individual passionate about sales and marketing. With a strong work ethic and commitment to excellence, I strive for success. Growing up in Utah, I developed a love for the outdoors, spending free time exploring mountains and forests. As an avid snowboarder, carving down slopes gives me a thrill. In my academic journey, I found a deep interest in sales and marketing, recognizing its role in business growth. With a natural ability to connect with others and curiosity about consumer behavior, I excel in sales, marketing, and related fields. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
