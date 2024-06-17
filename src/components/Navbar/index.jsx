/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import appLogo from "../../assets/images/banner.svg";
import Spotseeker from "../../assets/images/KS-Spotseeker_logo.png";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
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
                <img alt="App Logo" src={Spotseeker} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-auto"
            >
              <li>
                <button className="btn btn-error px-12" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
