import React from "react";
import laptop from "../../assets/laptop.png";
function TailwindSection() {
  return (
    <div>
      <p className="uppercase text-center text-custom-blue-300 font-semibold md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl mb-2 px-4">
        A Digital solution for the management
      </p>
      <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2 p-8 justify-center items-center h-screen bg-blue-100">
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
        </div>
      </div>
    </div>
  );
}

export default TailwindSection;
