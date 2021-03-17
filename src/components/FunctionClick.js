/* Event handling */
/* import React from "react";

const FunctionClick = () => {
  const handleClick = () => {
    console.log("HandleClick");
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FunctionClick; */

import React, { Component } from "react";

export class FunctionClick extends Component {
  handleClick = () => {
    console.log("HandleClick");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default FunctionClick;
