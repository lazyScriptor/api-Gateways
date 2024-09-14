import React from "react";
import image from "../../assets/Image2.png";
import { CiShoppingCart } from "react-icons/ci";
function Products({ image, title1, title2 }) {
  return (
    <div className="group flex flex-col justify-start items-start gap-3  p-2 ">
      <div className="w-full bg-gray-200 hover:bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-400 h-full p-8 rounded-md relative transition-all duration-200">
        <img
          className="w-full aspect-square overflow-hidden"
          src={image}
          alt="Product"
        />
        <button className="flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 group-hover:backdrop-blur-sm opacity-0 text-3xl text-white hover:backdrop-blur-3xl  hover:opacity-100 transition duration-500 ease-in-out">
          {<CiShoppingCart className="text-9xl font-bold"/>}
        </button>
      </div>
      <p className="text-lg font-bold">{title1}</p>
      <p className="text-gray-500">{title2}</p>
    </div>
  );
}

export default Products;
