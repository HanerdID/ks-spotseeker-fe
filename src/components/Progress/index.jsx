import React from "react";

const Progress = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <progress className="progress w-56" value={0} max="100"></progress>
        <progress className="progress w-56" value="10" max="100"></progress>
        <progress className="progress w-56" value="40" max="100"></progress>
        <progress className="progress w-56" value="70" max="100"></progress>
        <progress className="progress w-56" value="100" max="100"></progress>
      </div>
    </div>
  );
};

export default Progress;
