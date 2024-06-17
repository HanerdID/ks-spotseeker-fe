import React from 'react'

const DiscoverButton = (props) => {
  return (
    <div>
      <button className="overflow-hidden w-auto p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group" onClick={props.onClick}>
        Discover More!
        <span className="absolute w-full ml-1 h-36 -top-8 -left-1 bg-white rotate-10 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
        <span className="absolute w-full ml-1 h-36 -top-8 -left-1 bg-[#F4E6D7] rotate-10 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
        <span className="absolute w-full ml-1 h-36 -top-8 -left-1 bg-[#EDDFD1] rotate-10 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-11 z-10 text-black">
          Explore!
        </span>
      </button>
    </div>
  );
}

export default DiscoverButton