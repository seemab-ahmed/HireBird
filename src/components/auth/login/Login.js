import React from "react";
import H from "../../../assets/Hirebird_Whitebanner 1.png";
import Button from "../../view-comp/Button";
import { Buttonicn, Msg, Psw, ShowPsw, Google } from "../../../assets/Svgs";
import { useNavigate } from "react-router-dom";
export default function Login({settoken}) {
  const nav = useNavigate();
  const navigate=()=>{
    nav("/Dashboard")
    settoken(true)
  }
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={H} alt="err" className="mb-8" />
        <form className=" lg:w-1/3 md:w-4/6 w-11/12 bg-[#191A1E] flex flex-col justify-center items-center lg:py-14 md:py-8 py-6 lg:px-10 md:px-8 px-6 rounded-md mx-4">
          <h1 className="text-5xl font-thin mb-4"> Sign in </h1>
          <p className="text-[#ffffff70]">Sign in here to continue.</p>
          <div className="w-full">
            <button className="flex justify-center items-center h-[55px] w-full rounded-[10px] bg-[#EA4335] my-6" onClick={()=>nav("/profile")}>
              <Google /> <span className="ms-5"> Sign in with Google</span>
            </button>
            <div className="flex justify-center items-center gap-3 mb-5">
              <span className="bg-[#61d18112] h-[2px] w-full"></span>
              <p className="text-[#ffffff70] w-full text-center">Or Sign in with Email</p>
              <span className="bg-[#61d18112]  h-[2px] w-full"></span>
            </div>
            <div className="flex justify-center items-center w-full h-[55px]  rounded-[10px] bordered bg-[#1D1D1D]  mb-4">
              <span className="border-red-span h-full flex items-center px-[14px]">
                <Msg />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Enter email"
              />
            </div>
            <div className="flex justify-center items-center w-full h-[55px] rounded-[10px] bordered bg-[#1D1D1D] mb-4">
              <span className="border-red-span h-full px-[14px] flex items-center">
                <Psw />
              </span>
              <input
                className="w-full h-full border-white bg-transparent placeholder-[#ffffff36] ps-3 text-[#ffffff81]"
                placeholder="Enter Password"
              />
              <span className="pe-4">
                <ShowPsw />
              </span>
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
                <p className="text-[#ffffff70] text-sm">Remember Me</p>
              </div>
              <div>
                <p
                  className="text-[#61D180] hover:cursor-pointer text-sm"
                  onClick={() => {
                    nav("/Forgotpassword");
                  }}
                >
                  Forgot Password?
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Button icon2={<Buttonicn />} text={"Sign in"} navigate={navigate}/>
            </div>
            <div>
              <div className="flex justify-center gap-1">
                <p className="text-[#ffffff70] text-sm">
                  Don't have an account?
                </p>
                <p
                  className="text-[#61D180] hover:cursor-pointer text-sm"
                  onClick={() => {
                    nav("/roleselect");
                  }}
                >
                  {" "}
                  sign up
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
