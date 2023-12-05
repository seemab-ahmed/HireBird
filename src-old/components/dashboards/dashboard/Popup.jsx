import React, { useState } from "react";
import Button from "../../view-comp/Button";
import SecondaryButton from "../../view-comp/SecondaryButton";
import PropTypes from "prop-types";

import CloseIcon from "../../../assets/closeIcon.png";

const PopUp = ({
  onClose,
  description,
  secondaryButtonText,
  primaryButtonText,
  ImagePath,
  iIconText,
  IIconPath,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="absolute top-[20%] right-[30%] z-50">
      <div className="relative w-[881px] h-[542px] border_green bg-[#1D1D1D] flex justify-center items-center flex-col gap-y-12 rounded-lg">
        <img
          src={ImagePath}
          alt=""
          className=" top-7 right-7 cursor-pointer"
          onClick={onClose}
        />
        <p className="text-white text-[26px] font-medium w-[450px] text-center">
          {description}
        </p>
        <div className="flex gap-5 items-center">
          <div>
            <SecondaryButton text={secondaryButtonText} onClick={onClose} />
          </div>
          <div>
            <Button text={primaryButtonText} onClick={onClose} />
          </div>

          <div className="relative">
            <button onClick={handleClick} >
              <img src={IIconPath} alt="" className=" cursor-pointer" />
            </button>

            {open && (
              <div className="absolute bottom-[70px] right-0 px-[18px] py-[22px] bg-[#61D180] rounded-lg w-[267px]">
                <p onClose={handleClose} className="text-center">
                 {iIconText}
                </p>
              </div>
            )}
          </div>
        </div>
        <img
          src={CloseIcon}
          alt=""
          className="absolute top-7 right-7 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
};

export default PopUp;
