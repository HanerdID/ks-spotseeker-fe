import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Review from "../../components/Review";
import appBanner from "../../assets/images/app-banner-home.png";
import Hero from "../../components/Hero";

const Home = () => {
  const [openWisata, setOpenWisata] = useState(false);
  const [openKuliner, setOpenKuliner] = useState(false);
  const [openHangout, setOpenHangout] = useState(false);
  const handleClick1 = () => {
    if (openWisata) setOpenWisata(false);
    else setOpenWisata(true);
  };
  const handleClick2 = () => {
    if (openKuliner) setOpenKuliner(false);
    else setOpenKuliner(true);
  };
  const handleClick3 = () => {
    if (openHangout) setOpenHangout(false);
    else setOpenHangout(true);
  };
  return (
    <div>
      <Navbar />
      <Hero heroText="Home" image={appBanner} />
      <div className="flex justify-center items-center w-full h-20 bg-red-300 my-4">
        <p className="font-semibold">
          Temukan Tempat Ternyaman di Kabupaten Semarang!
        </p>
      </div>
      <p className="text-center text-3xl font-bold py-4">Wisata</p>
      <Carousel click={handleClick1} className="py-4" />
      {openWisata && <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-4">
          <div className="container">Deskripsi</div>
          <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
            p
          </div>
          <div className="container">Review</div>
          <Review textReview="abc" />
        </div>}
      <p className="text-center text-3xl font-bold py-4">Kuliner</p>
      <Carousel click={handleClick2} className="py-4" />
      {openKuliner && <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-4">
          <div className="container">Deskripsi</div>
          <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
            p
          </div>
          <div className="container">Review</div>
          <Review textReview="abc" />
        </div>}
      <p className="text-center text-3xl font-bold py-4">Hangout</p>
      <Carousel click={handleClick3} className="py-4" />
      {openHangout && <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-4">
          <div className="container">Deskripsi</div>
          <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
            p
          </div>
          <div className="container">Review</div>
          <Review textReview="abc" />
        </div>}
      <Footer className="mb-10" />
    </div>
  );
};

export default Home