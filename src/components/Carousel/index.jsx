/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Carousel = (props) => {
  return (
    <div className={props.className}>
      <div className="carousel carousel-center rounded-box mx-8 border-4 border-black">
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              alt="Pizza"
              className="transition-transform duration-300 hover:scale-105 object-cover"
            />
          </button>
        </div>
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              alt="Pizza"
              className="transition-transform duration-300 hover:scale-105 object-cover"
            />
          </button>
        </div>
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
          <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
            className="transition-transform duration-300 hover:scale-105 object-cover"
          />
          </button>
        </div>
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
            className="transition-transform duration-300 hover:scale-105 object-cover"
          />
          </button>
        </div>
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Pizza"
            className="transition-transform duration-300 hover:scale-105 object-cover"
          />
          </button>
        </div>
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Pizza"
            className="transition-transform duration-300 hover:scale-105 object-cover"
          />
          </button>
        </div>
        <div className="transition ease-in-out delay-50 carousel-item hover:cursor-pointer duration-300">
          <button onClick={props.click}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Pizza"
            className="transition-transform duration-300 hover:scale-105 object-cover"
          />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel