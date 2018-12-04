import React, { Component } from "react";
import "../App.css";

class Create extends Component {
  render() {
    return (
      // input field and submit button created
      <div>
        <input value="To-Do Item" />
        <button>Submit</button>
      </div>
    );
  }
}

export default Create;
