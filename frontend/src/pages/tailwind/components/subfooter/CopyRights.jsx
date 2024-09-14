import React from "react";
import { ReactTyped } from "react-typed";

function CopyRights() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x py-4">
      <div className="container">
        <div>
          <h1 className="text-white">
            © 2024. All rights reserved by 
            <ReactTyped
              strings={["<strong> Theekshana Fernando</strong>"]}
              typeSpeed={50}
              backDelay={500}
              backSpeed={50}
              loop
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CopyRights;
