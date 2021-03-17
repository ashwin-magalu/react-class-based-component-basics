/* Component Mounting Lifecycle Methods */
import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ashwin",
    };
    console.log("Life Cycle Method B within Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Life Cycle Method B getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life Cycle Method B within componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Life Cycle Method B shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life Cycle Method B getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Life Cycle Method B componentDidUpdate");
  }

  render() {
    console.log("Life Cycle Method B within render()");
    return <div>Life Cycle Method B</div>;
  }
}

export default LifeCycleB;
