import React from "react";

function InputCustomized({ type, placeholder, register, name, ...rest }) {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        // step={type == "time" ? 900 : undefined}  // Set 30-minute intervals for time inputs
        type={type}
        {...register(name)}  
        className="border border-gray-300 p-1 pl-2 rounded-md w-full lg:max-w-xl"
        {...rest}  // Include rest of the props
      />
    </div>
  );
}

export default InputCustomized;
