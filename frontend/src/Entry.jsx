import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Analytics from "./Analytics";
import Column from "./Column";
import Login from "./login/Login";
function Entry() {
  const analyticsRef = useRef(null);

  // Function to scroll to the target section
  const scrollToAnalytics = () => {
    if (analyticsRef.current) {
      analyticsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative h-screen max-w-full bg-black text-white">
      
          <Navbar />
      

      <div className="pt-16 h-full flex flex-col justify-center items-center">
        <Hero onButtonClick={scrollToAnalytics} />
      </div>

    </div>
  );
}

export default Entry;
