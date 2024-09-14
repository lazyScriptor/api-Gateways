import React from "react";
import NavbarNew from "./components/NavbarNew";
import EcomHero from "./components/hero/EcomHero";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import brandRedImage from "../tailwind/assets/Image13.png";
import brandGreenImage from "../tailwind/assets/Image12.png";
import ProductsPage from "./components/products/productsPage";
import NewsPage from "./components/news/NewsPage";
import SubFooter from "./components/subfooter/SubFooter";
import CopyRights from "./components/subfooter/CopyRights";
function EComWeb() {
  const bannerData = {
    discount: "30% OFF",
    title: "Friday Deal",
    date: "10 Sep to 20 Sep",
    image: brandRedImage,
    title2: "Air Solo Base",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quia.",
    bgColor: "#f42c37",
    buttonBgColor: "white",
    textColor: "primary",
  };

  const bannerDataGreen = {
    discount: "20% OFF",
    title: "Spring Deal",
    date: "15 Mar to 25 Mar",
    image: brandGreenImage,
    title2: "Air Solo Max",
    title3: "Summer Sale",
    title4: "Consectetur adipiscing elit. Vivamus luctus.",
    bgColor: "#2dcc6f",
    buttonBgColor: "black",
    textColor: "white",
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-500 overflow-hidden">
      <NavbarNew />
      <EcomHero />
      <Category />
      <Category2 />
      <Services />
      <Banner bannerData={bannerData} />
      <ProductsPage />
      <Banner bannerData={bannerDataGreen} />
      <NewsPage/>
      <SubFooter/>
      <CopyRights/>
    </div>
  );
}

export default EComWeb;
