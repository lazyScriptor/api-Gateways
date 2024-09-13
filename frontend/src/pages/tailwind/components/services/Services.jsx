import React from "react";
import { FaShippingFast, FaGlobe, FaGift, FaLock } from "react-icons/fa";
const infoArray = [
  {
    id: 1,
    icon: <FaShippingFast className="text-4xl md:text-5xl text-primary" />, // React icon for free shipping
    title: "Free Domestic Shipping",
    description: "Fast and reliable",
  },
  {
    id: 2,
    icon: <FaGlobe className="text-4xl md:text-5xl text-primary" />, // React icon for oversees shipping
    title: "Overseas Free Shipping",
    description: "Worldwide delivery options",
  },
  {
    id: 3,
    icon: <FaGift className="text-4xl md:text-5xl text-primary" />, // React icon for anything else
    title: "Exclusive Member Offers",
    description: "Gifts and discounts",
  },
  {
    id: 4,
    icon: <FaLock className="text-4xl md:text-5xl text-primary" />, // React icon for secure payments
    title: "Secure Payment Systems",
    description: "Your data protected",
  },
];
function Services() {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          {infoArray.map((item, index) => (
            <div>
              <div
                key={item.id}
                className="flex items-center justify-center gap-2"
              >
                {item.icon}
                <div>
                  <h1 className="lg:text-xl font-bold">{item.title}</h1>
                  <h2 className="text-gray-400">{item.description}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
