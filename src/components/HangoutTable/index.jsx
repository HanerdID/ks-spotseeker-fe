import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const HangoutTable = () => {
  const [hangout, setHangout] = useState([]);
  const [dataHangout, setDataHangout] = useState({
    name: "",
    description: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    getHangout();
  }, []);

  const getHangout = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/hangout`);
      setHangout(response.data);
    } catch (error) {
      console.log("Get Hangout Failed");
    }
  };

  const getHangoutById = async (id) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/hangout/${id}`);
      setDataHangout(response.data);
    } catch (error) {
      console.log("Get Hangout Failed", error);
    }
  };

  const handleUpdate = async (id) => {
    const formData = {
      name: dataHangout.name,
      description: dataHangout.description,
      location: dataHangout.location,
      image: dataHangout.image,
    };
    try {
      await axios.put(`${process.env.BASE_URL}/hangout/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getHangout();
    } catch (error) {
      console.log("Update Failed", error);
    }
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    handleUpdate(id);
  };

  const handleChange = (e, field) => {
    if (field === "image") {
      const imageFile = e.target.files[0];
      setDataHangout({ ...dataHangout, [field]: imageFile });
    } else {
      const { value } = e.target;
      setDataHangout({ ...dataHangout, [field]: value });
    }
  };

  const deleteHangout = async (id) => {
    try {
      await axios.delete(`${process.env.BASE_URL}/hangout/${id}`);
      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "hangout deleted successfully.",
      });
      getHangout();
    } catch (error) {
      console.log("Delete Failed", error);
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "There was an error during delete. Please try again.",
      });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-gray-500 uppercase border-b bg-gray-50">
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Image</th>
              <th colSpan={2} className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {hangout.map((hangout, index) => (
              <tr
                key={hangout.id}
                className="text-gray-700 hover:bg-[#EDE0D1] hover:text-black"
              >
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{hangout.name}</td>
                <td className="px-4 py-3 text-sm">{hangout.description}</td>
                <td className="px-4 py-3 text-sm">{hangout.location}</td>
                <td className="px-4 py-3 text-sm">{hangout.image}</td>
                <td className="px-1 py-3 text-sm">
                  <div className="flex items-center justify-center gap-x-2">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        getHangoutById(hangout.id); // Fetch the hangout details by ID
                        document.getElementById(hangout.id).showModal();
                      }}
                    >
                      Edit
                    </button>
                    <dialog id={hangout.id} className="modal">
                      <div className="modal-box">
                        <div className="flex flex-col justify-center rounded-2xl bg-slate-500 p-8 md:p-16 gap-y-6">
                          <h2 className="text-center text-2xl font-semibold">
                            Form Update Hangout
                          </h2>
                          <div className="w-full">
                            <form
                              className="form-control gap-y-4"
                              onSubmit={(e) => handleSubmit(e, hangout.id)}
                            >
                              <label
                                htmlFor="name"
                                className="input input-bordered flex items-center gap-2"
                              >
                                <svg
                                  className="h-4 w-4 text-slate-900"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                                <input
                                  name="name"
                                  type="text"
                                  className="grow"
                                  placeholder="Nama"
                                  value={dataHangout.name}
                                  onChange={(e) => handleChange(e, "name")}
                                />
                              </label>
                              <label
                                htmlFor="description"
                                className="input input-bordered flex items-center gap-2"
                              >
                                <svg
                                  className="h-4 w-4 text-slate-900"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                                  <rect
                                    x="9"
                                    y="3"
                                    width="6"
                                    height="4"
                                    rx="2"
                                  />
                                  <line x1="9" y1="12" x2="9.01" y2="12" />
                                  <line x1="13" y1="12" x2="15" y2="12" />
                                  <line x1="9" y1="16" x2="9.01" y2="16" />
                                  <line x1="13" y1="16" x2="15" y2="16" />
                                </svg>
                                <input
                                  name="description"
                                  type="text"
                                  className="grow"
                                  placeholder="Deskripsi"
                                  value={dataHangout.description}
                                  onChange={(e) =>
                                    handleChange(e, "description")
                                  }
                                />
                              </label>
                              <label
                                htmlFor="location"
                                className="input input-bordered flex items-center gap-2"
                              >
                                <svg
                                  className="h-4 w-4 text-slate-900"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                <input
                                  name="location"
                                  type="text"
                                  className="grow"
                                  placeholder="Lokasi"
                                  value={dataHangout.location}
                                  onChange={(e) => handleChange(e, "location")}
                                />
                              </label>
                              <label className="form-control w-full max-w-xs">
                                <div className="label">
                                  <span className="label-text">
                                    Pick a file
                                  </span>
                                </div>
                                <input
                                  type="file"
                                  className="file-input file-input-bordered w-full max-w-xs"
                                  accept=".jpg, .jpeg, .png"
                                  onChange={(e) => handleChange(e, "image")}
                                />
                                <div className="label">
                                  <span className="label-text-alt">
                                    Format : .jpg, .jpeg, .png
                                  </span>
                                </div>
                              </label>
                              <div className="flex w-full justify-center items-center">
                                <button
                                  className="btn bg-[#EDE0D1] hover:bg-[#CCBAA7] w-full"
                                  type="submit"
                                >
                                  Update Hangout
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn btn-warning">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>

                    <button
                      className="btn btn-error"
                      onClick={() => deleteHangout(hangout.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HangoutTable;
