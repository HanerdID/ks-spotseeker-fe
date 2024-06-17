/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import Navbar from "../../../components/Navbar";
import appBanner from "../../../assets/images/app-banner-hangout.png";
import Carousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import Review from "../../../components/Review";
import Hero from "../../../components/Hero";
import MobileMenu from "../../../components/MobileMenu";

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
      <Hero heroText="Hangout" image={appBanner}/>
      <div className="flex justify-center items-center text-center w-full h-20 bg-red-300 my-4">
        <p className="font-semibold">
          Temukan Tempat Hangout Terbaik di Kabupaten Semarang!
        </p>
      </div>
      <Carousel click={handleClick} className="my-2" />
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
      <MobileMenu/>
    </div>
  );
};

export default Hangout;
