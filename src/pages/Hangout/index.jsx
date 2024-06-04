/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import appBanner from "../../assets/images/app-banner.png";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Review from "../../components/Review";

const Hangout = () => {
  const [open, setOpen] = useState(false);
  const review = "abc";
  const handleClick = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <img
        src={appBanner}
        alt="App Banner"
        className="object-cover h-96 w-full border-2 border-black"
      />
      <div className="flex justify-center items-center w-full h-20 bg-red-300 my-4">
        <p className="font-semibold">
          Temukan Tempat Wisata Terbaik di Kabupaten Semarang!
        </p>
      </div>
      <Carousel click={handleClick} />
      {open && (
        <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-4">
          <div className="container">Deskripsi</div>
          <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
            p
          </div>
          <div className="container">Review</div>
          <Review textReview={review} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Hangout;
