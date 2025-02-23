import React, { useState } from "react";

const InputComponents = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      setSubmittedValue(inputValue);
    }
  };

  const handleClick = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Submit</button>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
};

export default InputComponents;
