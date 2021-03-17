/* List rendering */
import React from "react";

const NameList = () => {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name, i) => <h2 key={i}>{name}</h2>);

  return (
    <div>
      {/* {names.map((name) => (
        <h4>{name}</h4>
      ))} */}
      {nameList}
    </div>
  );
};

export default NameList;
