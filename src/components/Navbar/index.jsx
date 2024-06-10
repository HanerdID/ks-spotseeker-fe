/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import appLogo from "../../assets/images/banner.svg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#EDE0D1]">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">KS SpotSeeker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a href="/home" rel="noreferrer noopener">
                Home
              </a>
            </li>
            <li>
              <a href="/destinasi" rel="noreferrer noopener">
                Wisata
              </a>
            </li>
            <li>
              <a href="/kuliner" rel="noreferrer noopener">
                Kuliner
              </a>
            </li>
            <li>
              <a href="/hangout" rel="noreferrer noopener">
                Hangout
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar bg-black"
            >
              <div className="w-10 rounded-full bg-white">
                <img alt="App Logo" src={appLogo} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/" rel="noopener noreferrer">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
