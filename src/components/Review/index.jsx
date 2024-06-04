import React from 'react'

const Review = (props) => {
  return (
    <div>
      <div className="flex items-center gap-x-8 w-full h-32 bg-yellow-300 p-4 rounded-2xl my-4">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="container bg-slate-500 w-full p-4 rounded-xl">{props.textReview}</div>
      </div>
    </div>
  );
}

export default Review