/* Refs */
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    /* 1st method */
    this.inputRef = React.createRef();
    /* 2nd method */
    this.cbRef = null;
    this.setCbRef = (e) => {
      this.cbRef = e;
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    /*  if (this.cbRef) {
      this.cbRef.focus();
    } */
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
    //alert(this.cbRef.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
