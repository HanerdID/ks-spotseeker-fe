import React, {useState} from "react";
import appBanner from "../../assets/images/app-banner.png";
import { login } from "../../api/auth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      window.location.href = "/"; // Redirect ke halaman utama setelah login sukses
    } catch (error) {
      setError("Login failed");
    }
  };


  return (
    <div>
      <div className="flex w-dvw h-dvh justify-center items-center">
        <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
          <div className="flex justify-center items-center">
            <figure className="w-full h-full">
              <img src={appBanner} alt="App logo" className="w-full h-full" />
            </figure>
          </div>
          <div className="flex flex-col justify-center bg-red-300 p-8 md:p-16 gap-y-6">
            <h2 className="text-center text-2xl font-semibold">Login</h2>
            <div className="w-full">
              <form className="form-control gap-y-4" onSubmit={handleLogin}>
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
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    min={12}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </form>
            </div>
            <div className="flex justify-end">
              {error && <p>{error}</p>}
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
