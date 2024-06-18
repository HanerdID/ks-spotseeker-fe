import React from "react";

const AdminNavbar = (props) => {
  return (
    <div>
      <div className="flex fixed px-4 z-10 top-2 w-full min-h-16 justify-between items-center bg-[#EDE0D1]">
        {props.list}
      </div>
    </div>
  );
};

export default AdminNavbar;
