/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import appLogo from '../../assets/images/app-logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#EDE0D1]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/dashboard" rel="noreferrer noopener">
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
          <a className="btn btn-ghost text-xl">KS SpotSeeker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a href="/dashboard" rel="noreferrer noopener">
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
              className="btn btn-ghost btn-circle avatar bg-red-400"
            >
              <div className="w-10 rounded-full bg-red-500">
                <img
                  alt="App Logo"
                  src={appLogo}
                />
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
}

export default Navbar