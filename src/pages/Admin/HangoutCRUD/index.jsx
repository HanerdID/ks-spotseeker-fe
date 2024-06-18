import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import HangoutTable from "../../../components/HangoutTable";
import CreateHangout from "../../../components/CreateHangout";
import MobileMenu from "../../../components/MobileMenu";

const HangoutCRUD = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
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
          <div className="flex w-dvw h-auto justify-center">
            <div className="container bg-slate-200 mt-4 p-8 rounded-xl space-y-4">
              <p className="text-center font-semibold text-3xl">Hangout Data</p>
              <div className="flex w-full justify-end">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="btn btn-info"
                  onClick={() =>
                    document.getElementById("createKulinerModal").showModal()
                  }
                >
                  Create
                </button>
                <dialog id="createKulinerModal" className="modal">
                  <div className="modal-box">
                    <CreateHangout />
                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn btn-warning">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
              <HangoutTable />
            </div>
          </div>
          <MobileMenu />
        </div>
      )}
    </div>
  );
};

export default HangoutCRUD;
