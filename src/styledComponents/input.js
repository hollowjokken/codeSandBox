import React, { Component } from "react";

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.user.name
    };
  }
  render() {
    const { name } = this.state;

    return (
      <div className="inputField">
        <h2>Hello!!!</h2>
        <p>I am {name}</p>
      </div>
    );
  }
}

// export default SearchBar;
