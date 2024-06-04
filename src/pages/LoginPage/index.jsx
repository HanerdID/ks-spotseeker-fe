import React from "react";
import appBanner from "../../assets/images/app-banner.png";

const LoginPage = () => {
  return (
    <div>
      <div className="flex w-dvh h-dvh justify-center items-center">
        <div className="flex w-auto bg-base-100 shadow-2xl rounded-2xl divide-x-8">
          <div className="container">
            <figure>
              <img
                src={appBanner}
                alt="App logo"
                className="w-[800px]"
              />
            </figure>
          </div>
          <div className="card-body justify-center bg-red-300 gap-y-6 px-16">
            <h2 className="card-title justify-center">Login</h2>
            <div className="container">
              <form className="form-control gap-y-4">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow form-control"
                    placeholder="Username"
                    required
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    className="grow form-control"
                    placeholder="********"
                    min={12}
                    required
                  />
                </label>
              </form>
            </div>
            <div className="card-actions justify-end">
              <a
                href="/dashboard"
                className="btn btn-primary hover:scale-110"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
