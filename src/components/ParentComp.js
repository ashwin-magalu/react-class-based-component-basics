/* Pure Component */
import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComeponent from "./PureComeponent";
import RegularComp from "./RegularComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ashwin",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ashwin",
      });
    }, 5000);
  }

  render() {
    console.log("********* Parent Comp Render **********");
    return (
      <div>
        <div>Parent Component</div>
        {/* <RegularComp name={this.state.name} />
        <PureComeponent name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
