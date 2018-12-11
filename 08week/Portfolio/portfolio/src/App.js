import React, { Component } from "react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ProjectsComponent from "./components/ButtonComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonComponent />
        <ProjectsComponent />
      </div>
    );
  }
}

export default App;
