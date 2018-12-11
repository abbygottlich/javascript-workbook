import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

class ElementCreator extends Component {
  render() {
    return (
      <ol>
        {this.props.starTrek.map((xyz, index) => (
          // attempting to implement the deleteItem function
          <Chip onDelete={index => this.props.deleteItem(index)} key={index}>
            {xyz}
          </Chip>
        ))}
      </ol>
    );
  }
}

export default ElementCreator;
