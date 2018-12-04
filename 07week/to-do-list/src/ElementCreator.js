import React, { Component } from "react";

class ElementCreator extends Component {
  render() {
    return (
      <ol>
        {this.props.starTrek.map((xyz, index) => (
          <li key={index}>{xyz}</li>
        ))}
      </ol>
    );
  }
}

export default ElementCreator;
