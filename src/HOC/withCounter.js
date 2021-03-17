/* Higher Order Components: To share common functionality between components
HOC is a pattern where a function takes a component as an argument and returns a new component
const EnhancedComponent = higherOrderComponent(originalComponent)
const IronMan = withSuite(TonyStack)
*/
import React, { Component } from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
