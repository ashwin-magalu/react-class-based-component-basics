/* memo: Making functional component a pure component */
import React from "react";

const MemoComp = ({ name }) => {
  console.log("Rendering Memo component");
  return <div>{name}</div>;
};

export default React.memo(MemoComp);
