import React, { forwardRef } from "react";
import laptop from "./assets/laptop.png";
import IFrame from "./IFrame";

const Analytics = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="text-black h-screen bg-gray-100">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 p-8 justify-center items-center h-screen">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="Laptop" />
        <div className="p-8">
          <p className="font-bold text-[#00df9a]">Data Analytics Dashboard</p>
          <h1 className="text-2xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            nesciunt, eos ab exercitationem beatae, perspiciatis optio illum
            laboriosam maiores non sapiente incidunt officia nulla obcaecati
            voluptas a alias accusantium sit.
          </p>
          <IFrame />
        </div>
      </div>
    </div>
  );
});

export default Analytics;
