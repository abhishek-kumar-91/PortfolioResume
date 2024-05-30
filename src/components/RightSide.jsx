import { useState } from "react";
import { FaUser, FaBlogger } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { TiContacts } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

function RightSide() {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => {
    if (path === "/about" && activeLink === "/") {
      return true; // Default to "About" when route is "/"
    }
    return location.pathname === path;
  };

  return (
    <div className="lg:w-auto lg:flex lg:pt-5 lg:pb-5 lg:h-[70vh]">
      <div className="lg:bg-white lg:p-5 lg:mt-20 rounded-xl lg:flex">
        <div className="lg:flex lg:flex-col lg:gap-2 lg:justify-center lg:items-center">
          <Link to="/about" onClick={() => setActiveLink("/about")}>
            <div
              className={`lg:flex lg:flex-col  lg:items-center lg:justify-center  cursor-pointer  p-4 hover:rounded-xl ${
                isActive("/about" || "/")
                  ? "bg-blue-500 text-white rounded-xl lg:w-[90px]"
                  : "hover:text-white hover:bg-blue-500 lg:bg-gray-100 text-gray-700 lg:w-[90px] rounded-xl"
              }`}
            >
              <FaUser size={"32px"} /> About
            </div>
          </Link>
          <Link to="/resume" onClick={() => setActiveLink("/resume")}>
            <div
              className={`lg:flex lg:flex-col lg:items-center lg:justify-center  cursor-pointer p-4 hover:rounded-xl ${
                isActive("/resume")
                  ? "bg-blue-500 text-white rounded-xl lg:w-[90px]"
                  : "hover:text-white hover:bg-blue-500 lg:w-[90px] bg-gray-100 rounded-xl"
              }`}
            >
              <IoNewspaperOutline size={"32px"} />
              Resume
            </div>
          </Link>
          <Link to="/works" onClick={() => setActiveLink("/works")}>
            <div
              className={`lg:flex lg:flex-col lg:items-center lg:justify-center  cursor-pointer p-4 hover:rounded-xl ${
                isActive("/works")
                  ? "bg-blue-500 text-white rounded-xl lg:w-[90px]"
                  : "hover:text-white hover:bg-blue-500 lg:w-[90px] bg-gray-100 rounded-xl"
              }`}
            >
              <PiBagFill size={"32px"} />
              Works
            </div>
          </Link>
          <Link to="/blogs" onClick={() => setActiveLink("/blogs")}>
            <div
              className={`lg:flex lg:flex-col lg:items-center lg:justify-center  cursor-pointer p-4 hover:rounded-xl ${
                isActive("/blogs")
                  ? "bg-blue-500 text-white rounded-xl lg:w-[90px]"
                  : "hover:text-white hover:bg-blue-500 lg:w-[90px] bg-gray-100 rounded-xl"
              }`}
            >
              <FaBlogger size={"32px"} />
              Blogs
            </div>
          </Link>
          <Link to="/contact" onClick={() => setActiveLink("/contact")}>
            <div
              className={`lg:flex lg:flex-col lg:items-center lg:justify-center cursor-pointer p-4 hover:rounded-xl ${
                isActive("/contact")
                  ? "bg-blue-500 text-white rounded-xl lg:w-[90px]"
                  : "hover:text-white hover:bg-blue-500 lg:w-[90px] bg-gray-100 rounded-xl"
              }`}
            >
              <TiContacts size={"32px"} />
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
