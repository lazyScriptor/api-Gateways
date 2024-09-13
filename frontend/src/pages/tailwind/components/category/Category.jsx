import React from "react";
import ShareButton from "../share/ShareButton";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import Image5 from "../../assets/Image5.png";

function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap:8">
          {/* first col */}
          <div className="relative p-2">

          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl  h-[320px] flex items-end">
            {/* first col -text */}
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                <ShareButton
                  text={"Browse"}
                  bgColor={"primary"}
                  textColor={"white"}
                />
              </div>
              {/* first col-image */}
              <div>
                <img src={Image1} className="absolute w-[200px] top-0 right-0 "/>
              </div>
            </div>
          </div>
          </div>
          {/* second col */}
          {/* third col */}
        </div>
      </div>
    </div>
  );
}

export default Category;
