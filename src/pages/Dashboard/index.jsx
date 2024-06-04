import { React, useState } from "react";
import Navbar from "../../components/Navbar";
import appBanner from "../../assets/images/app-banner.png";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Review from "../../components/Review";

const Dashboard = () => {
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
          Temukan Tempat Ternyaman di Kabupaten Semarang!
        </p>
      </div>
      <p className="text-center text-3xl font-bold mb-2">Wisata</p>
      <Carousel click={handleClick} />
      <div className="flex justify-center items-center w-full h-1 border-2 bg-red-300 my-4"></div>
      
      <p className="text-center text-3xl font-bold mb-2">Kuliner</p>
      <Carousel click={handleClick} />
      <div className="flex justify-center items-center w-full h-1 border-2 bg-red-300 my-4"></div>
      
      <p className="text-center text-3xl font-bold mb-2">Hangout</p>
      <Carousel click={handleClick} />

      <Footer className="mb-10"/>
    </div>
  );
};

export default Dashboard