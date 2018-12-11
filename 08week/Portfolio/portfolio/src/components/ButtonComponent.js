import React, { Component } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";

class ButtonComponent extends Component {
  state = {
    displayText: "Hello, Welcome to My Portfolio.",
    buttonText: "View My Projects"
  };

  handleClick = () => {
    this.setState({
      displayText: "My Projects",
      buttonText: "Home"
    });
  };

  render() {
    return (
      <div>
        <header>{this.state.displayText}</header>
        <Button onClick={this.handleClick}>{this.state.buttonText}</Button>
      </div>
    );
  }
}

export default ButtonComponent;
