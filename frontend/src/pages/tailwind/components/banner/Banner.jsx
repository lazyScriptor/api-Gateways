import React from "react";
import { BannerButton } from "../share/ShareButton";

function Banner({ bannerData }) {
  return (
    <div className="py-12">
      <div className="container text-white">
        <div className="p-2 relative">
          <div
            className="p-4 rounded-3xl py-10"
            style={{ backgroundColor: bannerData.bgColor }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col justify-center items-center gap-2 order-2 md:order-1 text-center md:text-left p-4">
                <p className="">{bannerData.discount}</p>
                <h1 className="uppercase text-5xl font-bold">
                  {bannerData.title}
                </h1>
                <p className="border-2 border-white mt-2 px-2 rounded-full">
                  {bannerData.date}
                </p>
              </div>
              {/* Column 2 - Image */}
              <div className="order-1 md:order-2 flex justify-center items-center">
                <img src={bannerData.image} className="" alt="Banner" />
              </div>
              {/* Column 3 */}
              <div className="flex flex-col justify-center gap-2 order-3 md:order-3 text-center md:text-left">
                <h2>{bannerData.title2}</h2>
                <h3 className="text-4xl font-bold">{bannerData.title3}</h3>
                <p className="text-sm tracking-wide leading-5">
                  {bannerData.title4}
                </p>
                <BannerButton
                  text="Shop"
                  bgColor={bannerData.buttonBgColor}
                  textColor={bannerData.textColor}
                  width={"100px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
