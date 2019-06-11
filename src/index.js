import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputCostumeField from "./components/inputField";

import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      name: "Ronai",
      user: {
        name: "Norbert"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <InputCostumeField user={this.state} />
      </div>
    );
  }
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App props={null} />, rootElement);
