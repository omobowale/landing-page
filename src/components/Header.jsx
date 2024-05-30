import React, { useState } from "react";
import CustomActionButton from "./CustomActionButton";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="flex items-center justify-between rounded-lg px-4 py-2 relative"
      style={{ backgroundColor: "#525AA0" }}
    >
      <div className="w-[40%]">
        <img src="/assets/header-logo.png" />
      </div>
      <div
        className="justify-between w-full lg:flex lg:flex-row hidden"
        id="navbar-default"
      >
        <div className="flex items-center text-white gap-5 ">
          <div>Find Work</div>
          <div>Find Talent</div>
          <div>Articles</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-white">Login</div>
          <div>
            <CustomActionButton className="bg-white" label={"Join Now"} />
          </div>
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className="lg:hidden"
        data-collapse-toggle="navbar-default"
        type="button"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        {!show && <IoMdMenu className="text-lg text-white cursor-pointer" />}
        {show && <IoCloseSharp className="text-lg text-white cursor-pointer" />}
      </div>

      {/* Modal section */}
      {show && (
        <div
          style={{ backgroundColor: "#525AA0", zIndex: "1000" }}
          className="absolute top-0 w-full mt-[2.5em] mx-auto left-0"
          id="navbar-default"
        >
          <div className="flex flex-col items-center text-left text-white gap-5 ">
            <div className="text-left">Find Work</div>
            <div className="text-left">Find Talent</div>
            <div className="text-left">Articles</div>
            <div className="text-left">About Us</div>
            <div className="text-left">Contact Us</div>
          </div>
          <div className="flex gap-4 items-center justify-center text-left">
            <div className="text-white">Login</div>
            <div>
              <CustomActionButton
                className="bg-white mt-3"
                label={"Join Now"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
