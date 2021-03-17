/* Shows setState */
import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    /* this.setState({
      count: this.state.count + 1,
    }); */
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h5>Count - {this.state.count}</h5>
        <button onClick={() => this.incrementFive()}>Increment by 5</button>
        <button onClick={() => this.increment()}>Increment by 1</button>
      </div>
    );
  }
}

export default Counter;
