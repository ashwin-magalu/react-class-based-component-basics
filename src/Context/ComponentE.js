import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends Component {
  // static contextType = UserContext;
  render() {
    return (
      <div>
        <h5>Component E Context: {this.context}</h5>
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;

export default ComponentE;
