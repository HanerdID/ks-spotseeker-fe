import React, { useEffect, useState } from "react";
import appBanner from "../../assets/images/app-banner.png";
import { register } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import nameImage from "../../assets/images/name.png";
import usernameImage from "../../assets/images/username.png";
import passwordImage from "../../assets/images/password.png";
import homeBanner from "../../assets/images/app-banner-home.png";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(name, username, password);
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered!",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      console.log("Gagal Register");
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "There was an error during registration. Please try again.",
      });
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex w-dvw h-dvh opacity-50 bg-black z-40">
          <span className="loading loading-infinity loading-lg z-50"></span>
        </div>
      ) : (
        <div>
          <img
            src={homeBanner}
            alt="Login Page Background"
            className="fixed -z-20"
          />
          <div className="container fixed top-1 left-1 w-auto h-auto">
            <button
              type="button"
              className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-sm font-semibold group"
              onClick={() => navigate("/")}
            >
              <div className="bg-[#EDE0D1] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#000000"
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  ></path>
                  <path
                    fill="#000000"
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-2">Back to Home</p>
            </button>
          </div>
          <div className="flex w-dvw h-dvh opacity-50 bg-black fixed -z-10" />
          <div className="flex w-dvw h-dvh justify-center items-center">
            <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
              <div className="flex">
                <figure className="w-full h-full">
                  <img
                    src={appBanner}
                    alt="App logo"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
              <div className="flex flex-col justify-center bg-red-300 p-8 md:p-16 gap-y-6">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <div className="w-full">
                  <form
                    className="form-control gap-y-4"
                    onSubmit={handleRegister}
                  >
                    <label className="input input-bordered flex items-center gap-2">
                      <img src={nameImage} alt="name icon" className="w-4" />
                      <input
                        type="text"
                        className="grow form-control"
                        placeholder="Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <img
                        src={usernameImage}
                        alt="username icon"
                        className="w-4"
                      />
                      <input
                        type="text"
                        className="grow form-control"
                        placeholder="Username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <img
                        src={passwordImage}
                        alt="password icon"
                        className="w-4"
                      />
                      <input
                        type="password"
                        className="grow form-control"
                        placeholder="********"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </label>
                    <div className="flex w-full justify-center items-center">
                      <button
                        className="btn bg-[#EDE0D1] hover:bg-[#CCBAA7] w-full"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                    <a
                      className="bg-white text-center w-full rounded-2xl h-12 relative font-sans text-black font-semibold group cursor-pointer"
                      href="/login"
                    >
                      <div className="bg-[#EDE0D1] cursor-pointer rounded-xl h-10 w-1/4 flex items-center justify-center absolute ml-2 top-[4px] group-hover:w-11/12 z-10 duration-500">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#000000"
                            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                          ></path>
                          <path
                            fill="#000000"
                            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                          ></path>
                        </svg>
                      </div>
                      <p className="translate-x-2 cursor-pointer flex justify-center items-center h-full">
                        Back
                      </p>
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
