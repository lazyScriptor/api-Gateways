import React from "react";
import laptop from "../../assets/laptop.png";
function TailwindSection() {
  return (
    <div>
      <p className="uppercase text-center text-custom-blue-300 font-semibold md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl mb-2 px-4">
        A Digital solution for the management
      </p>
      <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2 p-8 justify-center items-center h-full bg-blue-100">
        <div class="flex ...">
          <div class="flex-1 ...">01</div>
          <div class="contents">
            <div class="flex-1 ...">02</div>
            <div class="flex-1 ...">03</div>
          </div>
          <div class="flex-1 ...">04</div>
        </div>

        <div className="container h-[400px] mx-auto p-2 columns-2 md:columns-3">
          <h1>this is a heading</h1>
          <h2>heading 2 </h2>
          <h2>heading 3 </h2>
        </div>
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
