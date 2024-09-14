import React from "react";

export default function ShareButton({
  text,
  bgColor,
  textColor,
  handler,
  width,
}) {
  return (
    <div>
      {" "}
      <button
        onClick={handler}
        className={`cursor-pointer rounded-full w-${width} p-2 w-[80%] max-w-[200px] sm: text-${textColor} font-bold  bg-${bgColor} relative z-10 dark:text-white`}
      >
        {text}
      </button>
    </div>
  );
}

export function BannerButton({ text, bgColor, textColor, handler, width }) {
  return (
    <div>
      {" "}
      <button
        onClick={handler}
        className={`cursor-pointer rounded-full w-[${width}] p-2  sm: text-${textColor} font-bold  bg-${bgColor} relative z-10 `}
      >
        {text}
      </button>
    </div>
  );
}
