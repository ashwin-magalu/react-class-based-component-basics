/* props destructuring */
import React from "react";

/* const Greet = ({ name, heroName }) => {
  return (
    <div>
      Hi, {name} a.k.a {heroName}
    </div>
  );
}; */
/* const Greet = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      Hi, {name} a.k.a {heroName}
    </div>
  );
}; */

class Greet extends React.Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        Hi, {name} a.k.a {heroName}
      </div>
    );
  }
}

export default Greet;
