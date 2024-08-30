import React from "react";

function Column() {
  return (
    <div className="bg-gray-100">
      <div className="border-2 h-screen text-black max-w-[1240px] mx-auto columns-sm pt-[70px] gap-8">
        <div>
          <span className="box-decoration-slice bg-gradient-to-l from-indigo-600 to-pink-500 text-white px-2">
            Hello
          </span>
          <br/>
          <button
            className="box-decoration-clone bg-gradient-to-r from-[#00df9a]  to-black text-white px-4 py-2 rounded-lg hover:bg-[#00df9a] box-decoration-none"
            style={{ width: '400px' }}
          >
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Column;