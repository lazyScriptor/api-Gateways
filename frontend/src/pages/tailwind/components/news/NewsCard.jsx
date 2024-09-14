import React from "react";

function NewsCard({ id, title1, title2, image, para }) {
  return (
    <div>
      <img
        src={image}
        className="overflow-hidden rounded-3xl w-full aspect-video"
      />
      <div className="space-y-2 pt-2">
        <h1 className="text-gray-400">{title1}</h1>
        <h2 className="font-bold tracking-wider">{title2}</h2>
        <p className="text-gray-300">{para}</p>
      </div>
    </div>
  );
}

export default NewsCard;
