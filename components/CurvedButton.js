import React from "react";

const CurvedButton = ({ width, height, bg, textSize, title, action }) => {
  return (
    <div
      className={`${width} ${height} ${bg} flex flex-col justify-center items-center rounded-2xl border-r-[2px] border-b-[2px] ring-inset cursor-pointer`}
      onClick={action}
    >
      <span className={`font-bold ${textSize}`}>{title}</span>
    </div>
  );
};

export default CurvedButton;
