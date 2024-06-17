import { React, useState } from "react";
import Carousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Review from "../../../components/Review";
import appBannerWisata from "../../../assets/images/app-banner-wisata.jpg";

const Wisata = () => {
  const [open, setOpen] = useState(false);
  const review = "abc";
  const handleClick = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };
  return (
    <>
      <Navbar />

      {/* HERO ELEMENT */}
      <div
        className="hero h-96"
        style={{ backgroundImage: `url(${appBannerWisata})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">WISATA</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-20 bg-[#C9D7DD] my-4">
        <p className="font-semibold">
          Temukan Tempat Wisata Terbaik di Kabupaten Semarang!
        </p>
      </div>

      {/* DESTINATION CAROUSEL */}
      <Carousel click={handleClick} />

      {/* DESTINATION DETAIL */}
      {open && (
        <div className="card mx-5 my-2.5 bg-[#C9D7DD] text-primary-content">
          <div className="card-body text-[#1F2937]">
            <div id="destination-description">
              <h2 className="card-title">Description</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div id="destination-reviews">
              <h2 className="card-title">Reviews</h2>
              <Review textReview={review} />
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Wisata;
