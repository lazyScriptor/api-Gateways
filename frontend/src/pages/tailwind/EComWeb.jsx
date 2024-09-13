import React from "react";
import NavbarNew from "./components/NavbarNew";
import EcomHero from "./components/hero/EcomHero";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Services from "./components/services/Services";
function EComWeb() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-500 overflow-hidden">
      <NavbarNew />
      <EcomHero />
      <Category />
      <Category2 />
      <Services />
    </div>
  );
}

export default EComWeb;
