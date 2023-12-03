import React, { useState } from "react";
import Button from "../../view-comp/Button";
import dimondIcon from "../../../assets/dimond.png";
import UpAnimationIcon from "../../../assets/AnimationIcon.png";
import IIcon from "../../../assets/ibtn.png";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import PopUp from "./Popup";
import SecondaryButton from "../../view-comp/SecondaryButton";

const SelectBudget = () => {
  const [showPopup, setShowPopup] = useState(false);

  const HandleOpen = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="px-8 mb-20 relative">
      <div className="flex justify-between items-center py-8">
        <h2 className="text-5xl font-bold ">Create Job</h2>
      </div>
      <div className=" px-[30px] border_green bg-[#191A1E] pt-[87px] rounded-lg">
        <div className="relative ">
          <div className="bg-[#47484B] h-1 w-full py-1 rounded"></div>
          <div className="bg-[#61D180] absolute h-2 w-[353px] rounded py-1 top-0 "></div>
        </div>
        <div className="flex mt-5 text-white justify-between">
          <div className="text-xl font-extralight">Step 1</div>
          <div className="text-xl font-extralight">Step 2</div>
          <div className="text-xl font-extralight">Step 3</div>
          <div className="text-xl font-extralight">Step 4</div>
        </div>
        <div className="mt-[55px]">
          <h3 className="text-xl font-extralight">Budget</h3>
          <div className="mt-5">
            <Slider defaultValue={50} aria-label="$" valueLabelDisplay="auto" />
          </div>

          <p className="text-xl font-extralight text-gray-500 text-center mt-[30px]">
            <span className="text-white">$395</span> monthly maximum
          </p>

          <h3 className="text-xl font-extralight">Duration</h3>
          <div className="mt-5">
            <Slider defaultValue={50} aria-label="$" valueLabelDisplay="auto" />
          </div>
          <p className="text-lg font-extralight mt-[58px]">Reach an estimated 6,010 - 10,140 people and get 100 - 190 ad clicks per month</p>
        </div>
        <div className="my-32 w-[400px] ml-auto flex gap-4">
        <SecondaryButton text="Cancel" />
          <Button text={"Set Budget"} navigate={HandleOpen} />
        </div>
      </div>
      {showPopup && (
        <PopUp
          onClose={closePopup}
          description="Boost your post to reach out to a bigger candidate base"
          secondaryButtonText="No Thanks"
          primaryButtonText="Yes, boost to reach a larger audience!"
          ImagePath={UpAnimationIcon}
          IIconPath={IIcon}
          iIconText="Job listings that are boosted receive 4.6x the amount of applicants, and find a successful hire 3.2x faster."
        />
      )}
    </div>
  );
};

export default SelectBudget;
