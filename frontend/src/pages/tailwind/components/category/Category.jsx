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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="relative p-2  ">
            <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl transition-all duration-500 h-[320px] flex items-end hover:drop-shadow-xl hover:shadow-xl hover:shadow-gray-500/50  cursor-pointer">
              {/* first col -text */}
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-400">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                    Earphone
                  </p>
                  <ShareButton
                    text={"Browse"}
                    bgColor={"primary"}
                    textColor={"white"}
                  />
                </div>
                {/* first col-image */}
                <div>
                  <img
                    src={Image1}
                    className="absolute max-w-[200px] w-[70%] top-0 right-0 "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* second col */}
          <div className="relative p-2 ">
            <div className="py-10 pl-5 flex items-end category-components transition-all duration-500 bg-gradient-to-br dark:from-brandGreen dark:to-[#49daadc9] from-brandGreen to-brandGreen/90 text-white rounded-3xl  h-[320px]  hover:drop-shadow-xl hover:shadow-xl hover:shadow-gray-500/50  cursor-pointer">
              {/* second col -text */}
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-600">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                    i Watch
                  </p>
                  <ShareButton
                    text={"Browse"}
                    bgColor={"primary"}
                    textColor={"white"}
                  />
                </div>
                {/* second col-image */}
                <div>
                  <img
                    src={Image4}
                    className="absolute max-w-[200px] w-[60%]  top-0 right-0 "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* third col */}
          <div className="sm:col-span-2 relative p-2">
            <div className="py-10 pl-5 flex items-end category-components transition-all duration-500 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl  h-[320px]  hover:drop-shadow-xl hover:shadow-xl hover:shadow-gray-500/50  cursor-pointer">
              {/* third col -text */}
              <div>
                <div className="mb-4">
                  <p className="mb-[2px] text-gray-600">Enjoy</p>
                  <p className="text-2xl font-semibold mb-[2px]">With</p>
                  <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                    i Watch
                  </p>
                  <ShareButton
                    text={"Browse"}
                    bgColor={"primary"}
                    textColor={"white"}
                  />
                </div>
                {/* third col-image */}
                <div>
                  <img
                    src={Image2}
                    className="absolute max-w-[300px] w-[70%] top-0 right-0  sm:top-5 sm:right-10 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
