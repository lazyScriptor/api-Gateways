import React from "react";
import Products from "./products";
import image1 from "../../assets/Image2.png";

import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";
import Image6 from "../../assets/Image6.png";
import Image7 from "../../assets/Image7.png";
import Image8 from "../../assets/Image8.png";
import Image9 from "../../assets/Image9.png";
import Image10 from "../../assets/Image10.png";
const productDetails = [
  {
    id: 1,
    image: Image1,
    title1: "Samsung Galaxy S22",
    title2: "145,000 LKR",
  },
  {
    id: 2,
    image: Image2,
    title1: "Sony WH-1000XM5 Headphones",
    title2: "120,000 LKR",
  },
  {
    id: 3,
    image: Image3,
    title1: "Apple MacBook Pro 14-inch",
    title2: "600,000 LKR",
  },
  {
    id: 4,
    image: Image4,
    title1: "Dell XPS 15 Laptop",
    title2: "450,000 LKR",
  },
  {
    id: 5,
    image: Image5,
    title1: "GoPro Hero 10",
    title2: "90,000 LKR",
  },
  {
    id: 6,
    image: Image6,
    title1: "Apple iPhone 14 Pro",
    title2: "350,000 LKR",
  },
  {
    id: 7,
    image: Image7,
    title1: "Bose SoundLink Revolve",
    title2: "60,000 LKR",
  },
  {
    id: 8,
    image: Image8,
    title1: "Canon EOS R5 Camera",
    title2: "750,000 LKR",
  },
  {
    id: 9,
    image: Image9,
    title1: "Microsoft Surface Pro 8",
    title2: "380,000 LKR",
  },
  {
    id: 10,
    image: Image10,
    title1: "DJI Mavic Air 2 Drone",
    title2: "200,000 LKR",
  },
  {
    id: 11,
    image: Image1,
    title1: "HP Envy x360 Laptop",
    title2: "210,000 LKR",
  },
  {
    id: 12,
    image: Image2,
    title1: "Xiaomi Mi Smart Band 7",
    title2: "15,000 LKR",
  },
];

const ProductsPage = () => {
  return (
    <div>
      <div className="container overflow-auto">
        <div className="py-10">
          <h1 className="text-3xl font-bold text-center ">
            Best Seller Products
          </h1>
          <p className="text-center text-gray-400 py-3">Quality suppliers with the garantee </p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-14">
              {productDetails.map((item, index) => (
                <div className="" key={index}>
                  <Products
                    title1={item.title1}
                    title2={item.title2}
                    image={item.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
