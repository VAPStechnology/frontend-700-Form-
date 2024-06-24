import React, { useState } from "react";

const FormInput = ({ item1 }) => {
  const [inputValue, setInputValue] = useState(""); // State to track input value

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value state
  };

  
  return (
    <div className="flex flex-col mb-2">
      <label>{item1}</label>
      <input
        type="text"
        id="firstName"
        className="border border-black p-2 rounded-md"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      
    </div>
  );
};

export default FormInput;
