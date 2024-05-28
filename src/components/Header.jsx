import React from "react";

function Header() {
  return (
    <div
      className="flex items-center justify-between rounded-lg px-4 py-2"
      style={{ backgroundColor: "#525AA0" }}
    >
      <div>
        <img src="/assets/header-logo.png" />
      </div>
      <div className="flex items-center text-white gap-5">
        <div>Find Work</div>
        <div>Find Talent</div>
        <div>Articles</div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-white">Login</div>
        <div>
          <button className="bg-white rounded-lg px-3 py-1 flex">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
