import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";
import { MdEmail, MdOutlineDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function LeftSide() {
  return (
    <div className=" h-screen mt-5">
      <div className="lg:bg-white lg:-w-[350px] lg:p-5 lg:mt-20 rounded-xl">
        <div className="lg:relative lg:-top-28 lg:flex lg:justify-center">
          <img src="./profile.jpeg" className="lg:w-[220px] rounded-xl"/>
        </div>
        <div className="lg:flex lg:flex-col lg:items-center lg:gap-4 lg:relative lg:-top-20">
          <h1 className="lg:text-3xl lg:font-bold">Abhishek Kumar</h1>
          <div className="lg:px-5 lg:bg-gray-100 lg:py-3 lg:text-center lg:rounded-lg">Full Stack Developer</div>
          <div className="lg:flex lg:justify-between lg:px-10 lg:w-full">
            <FaGithub size={"35px"}  className="bg-gray-100  lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer"/>
            <FaTwitter size={"35px"}  className="bg-gray-100 lg:text-blue-400 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer" />
            <FaLinkedin size={"35px"}  className="bg-gray-100 lg:text-blue-700 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer" />
            <SiLeetcode size={"35px"}  className="bg-gray-100 lg:text-yellow-500 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white cursor-pointer" />
          </div>
        </div>

        <div className="lg:bg-gray-100 lg:p-5 lg:rounded-2xl lg:relative lg:-top-10">
            <div className="lg:flex  lg:items-center lg:gap-4 lg:border-b lg:p-2">
                <div>
                <IoMdPhonePortrait size={"32px"} className="bg-white text-pink-500 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white " />
                </div>
                <div>
                    <h5 className="text-sm">Phone</h5>
                    <h2 className="font-semibold">+918830028712</h2>
                </div>
            </div>
            <div className="lg:flex  lg:items-center lg:gap-4 lg:border-b lg:p-2">
                <div>
                <MdEmail size={"32px"} className="bg-white text-green-500 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white " />

                </div>
                <div>
                    <h5 className="text-sm">Email</h5>
                    <h2 className="font-semibold">abhishekkumar958830@gmail.com</h2>
                </div>
            </div>

            <div className="lg:flex  lg:items-center lg:gap-4 lg:border-b lg:p-2">
                <div>
                <FaLocationDot size={"32px"} className="bg-white text-pink-500 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white " />

                </div>
                <div>
                    <h5 className="text-sm">Location</h5>
                    <h2 className="font-semibold">Pune, India</h2>
                </div>
            </div>
            <div className="lg:flex  lg:items-center lg:gap-4 lg:border-b lg:p-2">
                <div>
                <MdOutlineDateRange size={"32px"} className="bg-white text-purple-500 lg:p-2 lg:rounded-xl hover:bg-blue-500 hover:text-white " />

                </div>
                <div>
                    <h5 className="text-sm">Birthday</h5>
                    <h2 className="font-semibold">June, 09, 2003</h2>
                </div>
            </div>
        </div>

        <div className="lg:flex lg:justify-center lg:relative lg:-top-3">
        <button className="lg:flex lg:text-center lg:items-center lg:gap-2 lg:px-10 lg:bg-blue-400 lg:py-3 lg:rounded-xl lg:text-white lg:font-bold">
        <IoDownloadOutline size={"24px"} />
        Download Cv
        </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
