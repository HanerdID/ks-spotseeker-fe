import React, { useState } from "react";
import axios from "axios";

const CreateHangout = () => {
  const [hangout, setHangout] = useState({
    name: "",
    description: "",
    location: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", hangout.name);
    formData.append("description", hangout.description);
    formData.append("location", hangout.location);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/hangout`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e, field) => {
    if (field === "image") {
      const imageFile = e.target.files[0];
      setImage(imageFile);
    } else {
      const { value } = e.target;
      setHangout({ ...hangout, [field]: value });
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center rounded-2xl bg-slate-500 p-8 md:p-16 gap-y-6">
        <h2 className="text-center text-2xl font-semibold">
          Form Create Hangout
        </h2>
        <div className="w-full">
          <form className="form-control gap-y-4" onSubmit={handleSubmit}>
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
                id="name"
                name="name"
                type="text"
                className="grow"
                placeholder="Nama"
                value={hangout.name}
                required
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
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <line x1="9" y1="12" x2="9.01" y2="12" />
                <line x1="13" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="9.01" y2="16" />
                <line x1="13" y1="16" x2="15" y2="16" />
              </svg>
              <input
                id="description"
                name="description"
                type="text"
                className="grow"
                placeholder="Deskripsi"
                value={hangout.description}
                required
                onChange={(e) => handleChange(e, "description")}
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
                id="location"
                name="location"
                type="text"
                className="grow"
                placeholder="Lokasi"
                value={hangout.location}
                required
                onChange={(e) => handleChange(e, "location")}
              />
            </label>
            <label htmlFor="image" className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Pick a file</span>
              </div>
              <input
                id="image"
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                accept=".jpg, .jpeg, .png"
                required
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
                Add Hangout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateHangout;
