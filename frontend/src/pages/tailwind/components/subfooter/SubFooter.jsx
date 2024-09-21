import React from "react";
import imageFooter from "../../assets/imageFooter2.png";
function SubFooter() {
  return (
    <div className="bg-gray-200 dark:bg-gray-500 " >
      <div className="container py-10">
        <div>
          <div className="grid grid-cols-6 md:grid-cols-5">
            {/* col 1 */}
            <div className="col-span-2 md:col-auto flex justify-center">
              <img src={imageFooter} className="w-28" />
            </div>
            {/* col 2 */}
            <div className="col-span-2 md:col-auto flex justify-center">
              <img src={imageFooter} className="w-28" />
            </div>
            {/* col 3 */}
            <div className="col-span-2 md:col-auto flex justify-center" >
              <img src={imageFooter} className="w-28" />
            </div>
            {/* col 4 */}
            <div className="col-span-3 md:col-auto flex justify-center">
              <img src={imageFooter} className="w-28" />
            </div>
            {/* col 5 */}
            <div className="col-span-3 md:col-auto flex justify-center">
              <img src={imageFooter} className="w-28" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
