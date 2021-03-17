/* The term render prop refers to the technique for 'sharing the code' between React Components using a prop 'whose value is a function' */
import React, { Component } from "react";

class User extends Component {
  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default User;
