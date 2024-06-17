import React from 'react'

const LandingNavbar = (props) => {
  return (
    <div>
      <div
        className="fixed top-0 z-10 flex w-full min-h-16 justify-center items-center"
        style={{ backgroundColor: props.backgroundColor, transition: "0.2s", color: props.color}}
      >
        {props.list}
      </div>
    </div>
  );
}

export default LandingNavbar