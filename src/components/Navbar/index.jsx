/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Spotseeker from "../../assets/images/KS-Spotseeker_logo.png";
import LogoutButton from "../LogoutButton";

const Navbar = (props) => {
  return (
    <div>
      <div className={`navbar bg-[#EDE0D1] ${props.className}`}>
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">KS SpotSeeker</a>
        </div>
        <div className="navbar-center hidden lg:flex">{props.list}</div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar bg-black"
            >
              <div className="w-10 rounded-full bg-white">
                <img loading="lazy" alt="App Logo" src={Spotseeker} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-auto"
            >
              <LogoutButton />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
