/* Binding Event Handlers */
import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    /* 3. Binding in Constructor, most suggested way  */
    /* this.handleClick = this.handleClick.bind(this); */
  }

  /* handleClick() {
    this.setState({
      message: "Good Bye!",
    });
  } */

  /* 4. Binding using arrow function, class property as arrow function, 2nd most suggested way */
  handleClick = () => {
    this.setState({
      message: "Good Bye!",
    });
  };

  render() {
    return (
      <div>
        <h5>{this.state.message}</h5>
        {/* 1. Binding in render method */}
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}

        {/* 2. Binding using arrow function in render method */}
        {/* <button onClick={() => this.handleClick()}>Click</button> */}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default EventBind;
