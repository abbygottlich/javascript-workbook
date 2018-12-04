import React, { Component } from "react";
import "../App.css";
// this is where all of your child files will be imported
import Create from "./CreateComponent";

class ToDo extends Component {
  render() {
    return (
      <div>
        <header>To Do List</header>
        {/* child file classes will all be instantiated here */}
        <Create />
      </div>
    );
  }
}

export default ToDo;
