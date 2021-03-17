/* Pure Component */
import React, { PureComponent } from "react";

class PureComeponent extends PureComponent {
  render() {
    console.log("Pure Comp Render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComeponent;
