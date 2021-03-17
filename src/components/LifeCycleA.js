/* Component Mounting Lifecycle Methods */
import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ashwin",
    };
    console.log("Life Cycle Method A within Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle Method A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle Method A within componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Life Cycle Method A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life Cycle Method A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Life Cycle Method A componentDidUpdate");
  }

  handleClick = () => {
    this.setState({
      name: "Gowda",
    });
  };

  render() {
    console.log("Life Cycle Method A within render()");
    return (
      <div>
        <div>Life Cycle Method A</div>
        <button onClick={this.handleClick}>Change State</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
