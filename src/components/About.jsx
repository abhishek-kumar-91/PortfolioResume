import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="lg:pt-5 lg:pb-5">
      <div className="bg-white lg:flex lg:flex-col lg:gap-5 justify-evenly lg:p-10 lg:mt-20 lg:w-[50vw] lg:rounded-xl">
        <div className="lg:flex lg:gap-10 lg:items-center">
          <h1 className="lg:text-6xl">About</h1>
          <div className="lg:w-[300px] bg-blue-500 h-1"></div>
        </div>
        <div>
          <p className="lg:text-lg lg:font-md">
            Hi, I'm Abhishek Kumar, a passionate Full Stack Developer with
            expertise in the MERN (MongoDB, Express.js, React, Node.js) stack. I
            thrive on solving complex problems and have developed numerous
            projects that showcase my skills. With a strong foundation in UI/UX
            design, I create applications that are both functional and visually
            appealing. I enjoy continuous learning and am always eager to take
            on new challenges. Let's connect and build something amazing
            together!
          </p>
        </div>
        <div>
          <h className="lg:text-4xl">What I Do!</h>
        </div>
        <div className="lg:flex lg:gap-5">
         <div className="lg:flex lg:items-center lg:w-[25vw] lg:gap-5 bg-orange-100 lg:p-10 lg:rounded-xl">
         <div>
         <FaCode size={"42px"} className="text-blue-500" />
          </div>

          <div>
            <h1 className="lg:text-xl lg:font-bold">Web Development</h1>
            <h5>Creating intuitive, engaging, and visually appealing user interfaces. Ensuring seamless user interactions to bring your vision to life.</h5>
          </div>
         </div>
         <div className="lg:flex lg:items-center lg:w-[25vw] lg:gap-5 bg-orange-100 lg:p-10 lg:rounded-xl">
         <div>
          <MdDesignServices size={"42px"} className="text-pink-500" />
          </div>

          <div>
            <h1 className="lg:text-xl lg:font-bold">UI/UX Design</h1>
            <h5>Creating intuitive, engaging, and visually appealing user interfaces. Ensuring seamless user interactions to bring your vision to life.</h5>
          </div>
         </div>
        </div>

        <div>
        <h1 className="text-center">© 2024 All Rights Reserved by Abhishek.</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
