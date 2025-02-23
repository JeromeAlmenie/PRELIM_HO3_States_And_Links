import React, { useState } from "react";

const ConditionalComponents = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>This content is conditionally rendered!</p>}
    </div>
  );
};

export default ConditionalComponents;
