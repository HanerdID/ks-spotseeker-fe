import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import axios from "axios";
import MobileMenu from "../../../components/MobileMenu";
import BackToTopButton from "../../../components/BackToTopButton";

const AdminHome = () => {
  const [hangout, setHangout] = useState([]);
  const [kuliner, setKuliner] = useState([]);
  const [wisata, setWisata] = useState([]);
  const [selectedKuliner, setSelectedKuliner] = useState(null);
  const [selectedHangout, setSelectedHangout] = useState(null);
  const [selectedWisata, setSelectedWisata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    getHangout();
    getKuliner();
    getWisata();
  }, []);

  const getHangout = async () => {
    try {
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
    }
  };

  const getKuliner = async () => {
    try {
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
    }
  };

  const getWisata = async () => {
    try {
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
    }
  };

  const showKuliner = (kuliner) => {
    setSelectedKuliner(kuliner);
    document.getElementById("modal_kuliner").showModal();
  };
  const showWisata = (wisata) => {
    setSelectedWisata(wisata);
    document.getElementById("modal_wisata").showModal();
  };
  const showHangout = (hangout) => {
    setSelectedHangout(hangout);
    document.getElementById("modal_hangout").showModal();
  };

  return (
    <div>
      {loading ? (
        <div className="flex w-dvw h-dvh justify-center items-center opacity-70 bg-black z-40">
          <span className="loading loading-dots z-50 w-96"></span>
        </div>
      ) : (
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
                          src={wisata.image}
                          alt="wisata"
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body w-full h-full">
                        <h2 className="card-title">{wisata.name}</h2>
                        <p className="overflow-hidden text-wrap w-32">
                          {wisata.description}
                        </p>
                        <span className="flex items-center font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clip-rule="evenodd"
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
            </section>

            <section id="kuliner">
              <div className="bg-[#EDE0D1] p-4 rounded-full">
                <p className="text-center font-bold">Kuliner</p>
              </div>
              <div className="flex w-auto justify-evenly my-4 py-4 bg-green-300 rounded-xl flex-wrap gap-8">
                {kuliner.map((kuliner, index) => (
                  <div key={index + 1} className="w-64 h-64">
                    <div className="card lg:card-side bg-base-100 shadow-2xl border-4 image-full w-full h-full">
                      <figure className="w-full h-full overflow-hidden">
                        <img
                          src={kuliner.image}
                          alt="Kuliner"
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body w-full h-full">
                        <h2 className="card-title">{kuliner.name}</h2>
                        <p className="overflow-hidden text-wrap w-32">
                          {kuliner.description}
                        </p>
                        <span className="flex items-center font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clip-rule="evenodd"
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
            </section>

            <section id="hangout">
              <div className="bg-[#EDE0D1] p-4 rounded-full">
                <p className="text-center font-bold">Hangout</p>
              </div>
              <div className="flex w-auto justify-evenly my-4 py-4 bg-yellow-300 rounded-xl flex-wrap gap-8">
                {hangout.map((hangout, index) => (
                  <div key={index + 1} className="w-64 h-64">
                    <div className="card lg:card-side bg-base-100 shadow-2xl border-4 image-full w-full h-full">
                      <figure className="w-full h-full overflow-hidden">
                        <img
                          src={hangout.image}
                          alt="hangout"
                          className="object-cover w-full h-full"
                        />
                      </figure>
                      <div className="card-body w-full h-full">
                        <h2 className="card-title">{hangout.name}</h2>
                        <p className="overflow-hidden text-wrap w-32">
                          {hangout.description}
                        </p>
                        <span className="flex items-center font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="size-6"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clip-rule="evenodd"
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
            </section>
          </div>

          <dialog id="modal_kuliner" className="modal">
            <div className="modal-box space-y-4 overflow-scroll">
              {selectedKuliner && (
                <>
                  <h3 className="font-bold text-lg">{selectedKuliner.name}</h3>
                  <p className="py-4 overflow-hidden text-wrap max-w-32">
                    {selectedKuliner.description}
                  </p>
                  <img
                    src={selectedKuliner.image}
                    alt={selectedKuliner.name}
                    className="object-cover w-full h-64 border-2 border-black"
                  />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126683.27363976087!2d110.30618018639497!3d-7.1430723459259164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7088a18dc5c0d7%3A0x739a5f6308956eb0!2sGubug%20Makan%20Mang%20Engking%20Ungaran!5e0!3m2!1sen!2sid!4v1718710637566!5m2!1sen!2sid"
                    className="border-2 border-black w-full h-96"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Map of Gubug Makan Mang Engking Ungaran"
                  ></iframe>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </dialog>
          <dialog id="modal_hangout" className="modal">
            <div className="modal-box space-y-4 overflow-scroll">
              {selectedHangout && (
                <>
                  <h3 className="font-bold text-lg">{selectedHangout.name}</h3>
                  <p className="py-4 overflow-hidden text-wrap max-w-32">
                    {selectedHangout.description}
                  </p>
                  <img
                    src={selectedHangout.image}
                    alt={selectedHangout.name}
                    className="object-cover w-full h-64 border-2 border-black"
                  />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1013354.6604096999!2d109.70785585057685!3d-7.193210209647833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70871073d211d5%3A0x894a4448f7d3e991!2sPondok%20Kopi%20Umbul%20Sidomukti!5e0!3m2!1sen!2sid!4v1718710519255!5m2!1sen!2sid"
                    className="border-2 border-black w-full h-96"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Map of Pondok Kopi Umbul Sidomukti"
                  ></iframe>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </dialog>
          <dialog id="modal_wisata" className="modal">
            <div className="modal-box space-y-4 overflow-scroll">
              {selectedWisata && (
                <>
                  <h3 className="font-bold text-lg">{selectedWisata.name}</h3>
                  <p className="py-4 overflow-hidden text-wrap max-w-32">
                    {selectedWisata.description}
                  </p>
                  <img
                    src={selectedWisata.image}
                    alt={selectedWisata.name}
                    className="object-cover w-full h-64 border-2 border-black"
                  />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253351.19420072326!2d110.23750588927037!3d-7.170723470113191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70871d08b3ed03%3A0x28b1ccd395dae5f8!2sTirto%20Wening%20Waterfall!5e0!3m2!1sen!2sid!4v1718710568243!5m2!1sen!2sid"
                    className="border-2 border-black w-full h-96"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Map of Tirto Wening Waterfall"
                  ></iframe>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </dialog>
          <BackToTopButton />
          <MobileMenu />
        </div>
      )}
    </div>
  );
};

export default AdminHome;
