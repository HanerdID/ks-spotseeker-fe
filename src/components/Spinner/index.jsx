import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <div>
      <div className="flex w-dvw h-dvh justify-center items-center fixed opacity-50 bg-black z-50 top-0">
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      </div>
    </div>
  );
}

export default Spinner