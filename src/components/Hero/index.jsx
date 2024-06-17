import React from 'react'

const Hero = (props) => {
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: `${props.backgroundSize}`,
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{props.heroText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero