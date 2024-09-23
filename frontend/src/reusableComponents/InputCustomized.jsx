import React from "react";

function InputCustomized({ type, placeholder, register, name, ...rest }) {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        {...register(name)}  
        className="border border-gray-300 p-1 pl-2 rounded-md"
        
      />
    </div>
  );
}

export default InputCustomized;
