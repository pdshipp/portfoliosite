import React, { Component } from "react";
import Profile from "./Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Portfolio Site</h1>
        <p>Yooooo</p>
        <Profile name="Pete" occupation="Web Developer" />
      </div>
    );
  }
}

export default App;
