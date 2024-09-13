import React from "react";

function ShareButton({ text, bgColor, textColor, handler }) {
  return (
    <div>
      {" "}
      <button
        onClick={handler}
        className={`cursor-pointer rounded-full p-2 w-[160px] text-${textColor} font-bold  bg-${bgColor} relative z-10 dark:text-white`}
      >
        {text}
      </button>
    </div>
  );
}

export default ShareButton;
