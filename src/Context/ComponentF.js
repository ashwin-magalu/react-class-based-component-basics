import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(content) => {
          return <h1>Hey, {content}</h1>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
