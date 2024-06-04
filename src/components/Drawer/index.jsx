/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Drawer = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
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
      </div>
    </div>
  );
}

export default Drawer