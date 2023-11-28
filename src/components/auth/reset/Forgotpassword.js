import React from "react";
import { Buttonicn, Msg } from "../../../assets/Svgs";
import Button from "../../view-comp/Button";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
import { useNavigate } from "react-router-dom";
export default function Forgotpassword() {
  const nav = useNavigate();
  const navigate = () => {
    nav("/Resetpassword");
  };
  return (
    <div className="pt-32">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-4/12 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-10 md:py-8 py-6 lg:px-8 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-5xl font-thin mb-4">Forgot your password?</h1>
          <p className="text-[#ffffff70] mb-8 text-center">
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </p>
          <div className="w-full">
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-4">
              <span className="border-red-span h-full flex items-center justify-center w-[55px]">
                <Msg />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Email Address"
              />
            </div>

            <div class="flex justify-between items-start w-full mb-7">
              <div class="flex items-center h-5 gap-3">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
                <p className="text-[#ffffff70] text-xs">
                  I agree to Hirebird Terms & Conditions{" "}
                  <span className="text-[#61D180] hover:cursor-pointer">
                    {" "}
                    Terms & Conditions{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Button
                icon2={<Buttonicn />}
                text={"Reset password"}
                navigate={navigate}
              />
            </div>
            <div>
              <div className="flex justify-center gap-1">
                <p
                  className="text-[#61D180] hover:cursor-pointer text-sm"
                  onClick={() => {
                    nav("/");
                  }}
                >
                  {" "}
                  Back to sign up
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
