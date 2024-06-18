import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const KulinerTable = () => {
  const [kuliner, setKuliner] = useState([]);
  const [dataKuliner, setDataKuliner] = useState({
    name: "",
    description: "",
    location: "",
    image: "",
  });

  useEffect(() => {
    getKulinerData();
  }, []);

  const getKulinerData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/kuliner`);
      setKuliner(response.data);
    } catch (error) {
      console.log("Get Kuliner Failed");
    }
  };

  const getKulinerById = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/kuliner/${id}`);
      setDataKuliner(response.data);
    } catch (error) {
      console.log("Get Kuliner Failed", error);
    }
  };

  const handleUpdate = async (id) => {
    const formData = {
        name: dataKuliner.name,
        description: dataKuliner.description,
        location: dataKuliner.location,
        image: dataKuliner.image,
    }
    try {
      await axios.put(`${process.env.REACT_APP_BASE_URL}/kuliner/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getKulinerData();
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
      setDataKuliner({ ...dataKuliner, [field]: imageFile });
    } else {
      const { value } = e.target;
      setDataKuliner({ ...dataKuliner, [field]: value });
    }
  };

  const deleteKulinerData = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}/kuliner/${id}`);
      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "Kuliner deleted successfully.",
      });
      getKulinerData();
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
            {kuliner.map((kuliner, index) => (
              <tr
                key={kuliner.id}
                className="text-gray-700 hover:bg-[#EDE0D1] hover:text-black"
              >
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{kuliner.name}</td>
                <td className="px-4 py-3 text-sm">{kuliner.description}</td>
                <td className="px-4 py-3 text-sm">{kuliner.location}</td>
                <td className="px-4 py-3 text-sm">{kuliner.image}</td>
                <td className="px-1 py-3 text-sm">
                  <div className="flex items-center justify-center gap-x-2">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        getKulinerById(kuliner.id); // Fetch the kuliner details by ID
                        document.getElementById(kuliner.id).showModal();
                      }}
                    >
                      Edit
                    </button>
                    <dialog id={kuliner.id} className="modal">
                      <div className="modal-box">
                        <div className="flex flex-col justify-center rounded-2xl bg-slate-500 p-8 md:p-16 gap-y-6">
                          <h2 className="text-center text-2xl font-semibold">
                            Form Update Kuliner
                          </h2>
                          <div className="w-full">
                            <form
                              className="form-control gap-y-4"
                              onSubmit={(e) => handleSubmit(e, kuliner.id)}
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
                                  value={dataKuliner.name}
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
                                  value={dataKuliner.description}
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
                                  value={dataKuliner.location}
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
                                  Update Kuliner
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
                      onClick={() => deleteKulinerData(kuliner.id)}
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

export default KulinerTable;
