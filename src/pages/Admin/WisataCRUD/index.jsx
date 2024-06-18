import React, { useState, useEffect } from "react";

import Navbar from "../../../components/Navbar";
import WisataTable from "../../../components/WisataTable";
import CreateWisata from "../../../components/CreateWisata";
import MobileMenu from "../../../components/MobileMenu";

const WisataCRUD = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex w-dvw h-dvh opacity-50 bg-black z-40">
          <span className="loading loading-infinity loading-lg z-50"></span>
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

          <div className="flex w-dvw h-auto justify-center">
            <div className="container bg-slate-200 mt-4 p-8 rounded-xl space-y-4">
              <p className="text-center font-semibold text-3xl">Wisata Data</p>
              <div className="flex w-full justify-end">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn btn-info"
                  onClick={() =>
                    document.getElementById("createWisataModal").showModal()
                  }
                >
                  Create
                </button>
                <dialog id="createWisataModal" className="modal">
                  <div className="modal-box">
                    <CreateWisata />
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-warning">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
              <WisataTable />
            </div>
          </div>
          <MobileMenu />
        </div>
      )}
    </div>
  );
};

export default WisataCRUD;
