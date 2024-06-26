import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import MobileMenu from "../../../components/MobileMenu";
import BackToTopButton from "../../../components/BackToTopButton";
import Spinner from "../../../components/Spinner";

const AdminHome = () => {
  const [hangout, setHangout] = useState([]);
  const [kuliner, setKuliner] = useState([]);
  const [wisata, setWisata] = useState([]);
  const [selectedKuliner, setSelectedKuliner] = useState(null);
  const [selectedHangout, setSelectedHangout] = useState(null);
  const [selectedWisata, setSelectedWisata] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHangout();
    getKuliner();
    getWisata();
  }, []);

  const getHangout = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/hangout`
      );
      const hangoutImage = response.data.map((hangout) => ({
        ...hangout,
        image: `${process.env.REACT_APP_BASE_URL}/${hangout.image}`,
      }));
      setHangout(hangoutImage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getKuliner = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/kuliner`
      );
      const kulinerImage = response.data.map((kuliner) => ({
        ...kuliner,
        image: `${process.env.REACT_APP_BASE_URL}/${kuliner.image}`,
      }));
      setKuliner(kulinerImage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getWisata = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/wisata`
      );
      const wisataImage = response.data.map((wisata) => ({
        ...wisata,
        image: `${process.env.REACT_APP_BASE_URL}/${wisata.image}`,
      }));
      setWisata(wisataImage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const showKuliner = (kuliner) => {
    setLoading(true);
    setSelectedKuliner(kuliner);
    document.getElementById("modal_kuliner").showModal();
    setLoading(false);
  };
  const showWisata = (wisata) => {
    setLoading(true);
    setSelectedWisata(wisata);
    document.getElementById("modal_wisata").showModal();
    setLoading(false);
  };
  const showHangout = (hangout) => {
    setLoading(true);
    setSelectedHangout(hangout);
    document.getElementById("modal_hangout").showModal();
    setLoading(false);
  };

  return (
    <div>
      <Navbar
        list={
          <ul className="flex py-2 px-8 rounded-full justify-center font-extrabold cursor-pointer">
            <li className="mx-2">
              <a
                className="btn bg-transparent border-none shadow-none"
                href="/adminHome"
              >
                Home
              </a>
            </li>
            <li className="mx-2">
              <a
                className="btn bg-transparent border-none shadow-none"
                href="/wisatacrud"
              >
                Wisata
              </a>
            </li>
            <li className="mx-2">
              <a
                className="btn bg-transparent border-none shadow-none"
                href="/kulinercrud"
              >
                Kuliner
              </a>
            </li>
            <li className="mx-2">
              <a
                className="btn bg-transparent border-none shadow-none"
                href="/hangoutcrud"
              >
                Hangout
              </a>
            </li>
          </ul>
        }
      />

      <div className="flex w-full h-auto justify-center">
        <div className="container bg-slate-200 mt-4 p-8 rounded-xl space-y-4">
          <p className="text-center font-semibold text-3xl">Data</p>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex flex-col p-12">
            <section id="wisata">
              <div className="bg-[#EDE0D1] p-4 rounded-full">
                <p className="text-center font-bold">Wisata</p>
              </div>
              <div className="flex w-auto justify-evenly my-4 py-4 bg-red-300 rounded-xl flex-wrap gap-8">
                {wisata.map((wisata, index) => (
                  <div key={index + 1} className="w-64 h-64">
                    <div className="card lg:card-side bg-base-100 shadow-2xl border-4 image-full w-full h-full">
                      <figure className="w-full h-full overflow-hidden">
                        <img
                          loading="lazy"
                          src={wisata.image}
                          alt="wisata"
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body overflow-hidden w-full h-full">
                        <h2 className="card-title">{wisata.name}</h2>
                        <p className="text-justify truncate max-w-60">
                          {wisata.description}
                        </p>
                        <span className="flex items-center font-semibold text-justify truncate">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {wisata.location}
                        </span>
                        <div className="card-actions items-center justify-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => showWisata(wisata)}
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <dialog id="modal_wisata" className="modal">
                <form method="dialog" className="modal-box max-w-3xl">
                  <button
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                  {selectedWisata && (
                    <div className="modal-box-body">
                      <h3 className="font-bold text-lg">
                        {selectedWisata.name}
                      </h3>
                      <img
                        loading="lazy"
                        src={selectedWisata.image}
                        alt="modal_image"
                        className="object-cover w-full h-96 border-2 border-black"
                      />
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253351.19420072326!2d110.23750588927037!3d-7.170723470113191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70871d08b3ed03%3A0x28b1ccd395dae5f8!2sTirto%20Wening%20Waterfall!5e0!3m2!1sen!2sid!4v1718710568243!5m2!1sen!2sid"
                        className="border-2 border-black w-full h-96"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Map of Tirto Wening Waterfall"
                      ></iframe>
                      <p className="py-4 text-justify">
                        {selectedWisata.description}
                      </p>
                      <span className="flex items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {selectedWisata.location}
                      </span>
                    </div>
                  )}
                </form>
              </dialog>
            </section>

            <section id="kuliner">
              <div className="bg-[#EDE0D1] p-4 rounded-full">
                <p className="text-center font-bold">Kuliner</p>
              </div>
              <div className="flex w-auto justify-evenly my-4 py-4 bg-yellow-300 rounded-xl flex-wrap gap-8">
                {kuliner.map((kuliner, index) => (
                  <div key={index + 1} className="w-64 h-64">
                    <div className="card lg:card-side bg-base-100 shadow-2xl border-4 image-full w-full h-full">
                      <figure className="w-full h-full overflow-hidden">
                        <img
                          loading="lazy"
                          src={kuliner.image}
                          alt="kuliner"
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body overflow-hidden w-full h-full">
                        <h2 className="card-title">{kuliner.name}</h2>
                        <p className="text-justify truncate max-w-60">
                          {kuliner.description}
                        </p>
                        <span className="flex items-center font-semibold text-justify truncate">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {kuliner.location}
                        </span>
                        <div className="card-actions items-center justify-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => showKuliner(kuliner)}
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <dialog id="modal_kuliner" className="modal">
                <form method="dialog" className="modal-box max-w-3xl">
                  <button
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                  {selectedKuliner && (
                    <div className="modal-box-body">
                      <h3 className="font-bold text-lg">
                        {selectedKuliner.name}
                      </h3>
                      <img
                        loading="lazy"
                        src={selectedKuliner.image}
                        alt="modal_image"
                        className="object-cover w-full h-96 border-2 border-black"
                      />
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126683.27363976087!2d110.30618018639497!3d-7.1430723459259164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7088a18dc5c0d7%3A0x739a5f6308956eb0!2sGubug%20Makan%20Mang%20Engking%20Ungaran!5e0!3m2!1sen!2sid!4v1718710637566!5m2!1sen!2sid"
                        className="border-2 border-black w-full h-96"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Map of Gubug Makan Mang Engking Ungaran"
                      ></iframe>
                      <p className="py-4 text-justify">
                        {selectedKuliner.description}
                      </p>
                      <span className="flex items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {selectedKuliner.location}
                      </span>
                    </div>
                  )}
                </form>
              </dialog>
            </section>

            <section id="hangout">
              <div className="bg-[#EDE0D1] p-4 rounded-full">
                <p className="text-center font-bold">Hangout</p>
              </div>
              <div className="flex w-auto justify-evenly my-4 py-4 bg-green-300 rounded-xl flex-wrap gap-8">
                {hangout.map((hangout, index) => (
                  <div key={index + 1} className="w-64 h-64">
                    <div className="card lg:card-side bg-base-100 shadow-2xl border-4 image-full w-full h-full">
                      <figure className="w-full h-full overflow-hidden">
                        <img
                          loading="lazy"
                          src={hangout.image}
                          alt="hangout"
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body overflow-hidden w-full h-full">
                        <h2 className="card-title">{hangout.name}</h2>
                        <p className="text-justify truncate max-w-60">
                          {hangout.description}
                        </p>
                        <span className="flex items-center font-semibold text-justify truncate">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {hangout.location}
                        </span>
                        <div className="card-actions items-center justify-end">
                          <button
                            className="btn btn-primary"
                            onClick={() => showHangout(hangout)}
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <dialog id="modal_hangout" className="modal">
                <form method="dialog" className="modal-box max-w-3xl">
                  <button
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                  {selectedHangout && (
                    <div className="modal-box-body">
                      <h3 className="font-bold text-lg">
                        {selectedHangout.name}
                      </h3>
                      <img
                        loading="lazy"
                        src={selectedHangout.image}
                        alt="modal_image"
                        className="object-cover w-full h-96 border-2 border-black"
                      />
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013354.6604096999!2d109.70785585057685!3d-7.193210209647833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70871073d211d5%3A0x894a4448f7d3e991!2sPondok%20Kopi%20Umbul%20Sidomukti!5e0!3m2!1sen!2sid!4v1718710519255!5m2!1sen!2sid"
                        className="border-2 border-black w-full h-96"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Map of Pondok Kopi Umbul Sidomukti"
                      ></iframe>
                      <p className="py-4 text-justify">
                        {selectedHangout.description}
                      </p>
                      <span className="flex items-center font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {selectedHangout.location}
                      </span>
                    </div>
                  )}
                </form>
              </dialog>
            </section>
          </div>
        </div>
      )}
      <BackToTopButton />
      <MobileMenu />
    </div>
  );
};

export default AdminHome;
