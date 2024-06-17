import React, { useState, useEffect } from "react";
import appBanner from "../../assets/images/app-banner.png";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import homeBanner from "../../assets/images/app-banner-home.png";
import usernameImage from "../../assets/images/username.png";
import passwordImage from "../../assets/images/password.png";
import Spotseeker from "../../assets/images/KS-Spotseeker_logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(username, password);
      if (user.role === "ADMIN") {
        navigate("/adminHome");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log("Gagal Login");
      setError("Login failed");
    }
  };
  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Username or password is incorrect",
      });
      setError("");
    }
  }, [error]);

  return (
    <div>
      <img
        src={homeBanner}
        alt="Login Page Background"
        className="fixed -z-20 w-full h-full"
      />
      <div className="flex w-dvw h-dvh opacity-50 bg-black fixed -z-10" />
      <div className="flex w-dvw h-dvh justify-center items-center">
        <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
          <div className="container">
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
              <form className="form-control gap-y-4" onSubmit={handleLogin}>
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
                <div className="flex flex-col w-full">
                  <div className="divider divider-neutral"></div>
                </div>
                <div className="flex w-full justify-center items-center">
                  <button
                    className="btn bg-[#EDE0D1] hover:bg-[#CCBAA7] w-full"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
                <button className="mt-4 w-full cursor-pointer font-semibold overflow-hidden relative z-20 border border-[#EDE0D1] group px-8 py-2 bg-white rounded-lg" onClick={() => navigate("/register")}>
                  <span className="relative z-10 text-black group-hover:text-white text-sm duration-500">
                    Register
                  </span>
                  <span className="absolute w-full h-full bg-[#EDE0D1] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                  <span className="absolute w-full h-full bg-[#EDE0D1] -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
