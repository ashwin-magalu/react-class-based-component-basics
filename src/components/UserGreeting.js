/* Conditional rendering */
import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    /*  if (this.state.isLoggedIn) {
      return <div>Welcome Ashwin</div>;
    } else {
      return (
        <div>
          <div>Welcome Guest</div>
        </div>
      );
    } */

    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Ashwin</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>; */

    return this.state.isLoggedIn ? (
      <div>Welcome Ashwin</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;
