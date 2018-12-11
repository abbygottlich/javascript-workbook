import React, { Component } from "react";
import "../App.css";

class ProjectItem extends Component {
  state = {
    displayText: "Project #1",
    textColor: "white"
  };

  handleClick = () => {
    this.setState({
      displayText: "Cool App",
      textColor: "pink"
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.textColor }}>
          {this.state.displayText}
        </h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default ProjectItem;
