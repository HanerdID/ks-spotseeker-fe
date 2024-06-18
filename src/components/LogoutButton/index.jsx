import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth';

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="bg-black text-center w-32 rounded-2xl h-14 relative font-sans text-white text-sm font-semibold group"
        onClick={handleLogout}
      >
        <div className="bg-red-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[120px] z-10 duration-500">
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
        <p className="translate-x-2">Logout</p>
      </button>
    </div>
  );
}

export default LogoutButton