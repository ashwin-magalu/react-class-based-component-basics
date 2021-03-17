/* Methods as props */
import React from "react";

const Child = ({ greetHandler }) => {
  return (
    <div>
      <button onClick={() => greetHandler("Child")}>Greet Parent</button>
    </div>
  );
};

export default Child;
