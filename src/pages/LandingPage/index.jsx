import { React, useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Review from "../../components/Review";
import appBanner from "../../assets/images/app-banner.png";
import Hero from "../../components/Hero";
import LandingNavbar from "../../components/LandingNavbar";
import DiscoverButton from "../../components/DiscoverButton";
import { useNavigate } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopButton";

const LandingPage = () => {
  const [openWisata, setOpenWisata] = useState(false);
  const [openKuliner, setOpenKuliner] = useState(false);
  const [openHangout, setOpenHangout] = useState(false);
  const [navbarColor, setNavbarColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const navigate = useNavigate();

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

  const handleScroll = () => {
    if (window.scrollY >= 380) {
      setNavbarColor("#EDE0D1");
      setTextColor("black");
    } else {
      setNavbarColor("transparent");
      setTextColor("white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const discover = (
    <DiscoverButton onClick={() => navigate("/login")}/>
  );

  return (
    <div>
      <LandingNavbar
        backgroundColor={navbarColor}
        color={textColor}
        list={
          <ul className="flex gap-x-12 py-4 px-8 rounded-full w-full justify-center font-extrabold cursor-pointer">
            <li>
              <a href="#wisata">Wisata</a>
            </li>
            <li>
              <a href="#kuliner">Kuliner</a>
            </li>
            <li>
              <a href="#hangout">Hangout</a>
            </li>
          </ul>
        }
      />
      <section id="hero">
        <Hero heroText={discover} image={appBanner} backgroundSize="80%" />
        <div className="flex justify-center items-center w-full h-20 bg-red-300 my-4">
          <p className="font-semibold text-center">
            Temukan Tempat Ternyaman di Kabupaten Semarang!
          </p>
        </div>
      </section>
      <section id="wisata" className="lg:h-dvh">
        <p className="text-center text-3xl font-bold py-4">Wisata</p>
        <Carousel click={handleClick1} />
        {openWisata && (
          <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-2">
            <div className="container">Deskripsi</div>
            <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
              p
            </div>
            <div className="container">Review</div>
            <Review textReview="abc" />
          </div>
        )}
      </section>
      <section id="kuliner" className="lg:h-dvh">
        <p className="text-center text-3xl font-bold py-4">Kuliner</p>
        <Carousel click={handleClick2} className="py-4" />
        {openKuliner && (
          <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-4">
            <div className="container">Deskripsi</div>
            <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
              p
            </div>
            <div className="container">Review</div>
            <Review textReview="abc" />
          </div>
        )}
      </section>
      <section id="hangout" className="lg:h-dvh">
        <p className="text-center text-3xl font-bold py-4">Hangout</p>
        <Carousel click={handleClick3} className="py-4" />
        {openHangout && (
          <div className="flex flex-col w-full h-auto bg-green-300 px-12 py-8 my-4">
            <div className="container">Deskripsi</div>
            <div className="container w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
              p
            </div>
            <div className="container">Review</div>
            <Review textReview="abc" />
          </div>
        )}
      </section>

      <Footer className="mb-10" />
      <BackToTopButton />
    </div>
  );
};

export default LandingPage;
