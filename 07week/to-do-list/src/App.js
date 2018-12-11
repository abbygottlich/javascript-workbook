import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ElementCreator from "./ElementCreator";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    input: "",
    chips: [],
    test: "hello"
  };

  onChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      chips: [...this.state.chips, this.state.input],
      input: ""
    });
  };

  // creating a delete function that will allow me to delete specific chips
  deleteItem = index => {
    this.setState({
      chips: [this.state.chips.splice(index, 1)]
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My To-Do List</h1>
          <ElementCreator starTrek={this.state.chips} />
          <form onSubmit={this.onSubmit}>
            <TextField
              value={this.state.input}
              onChange={this.onChange}
              placeholder="I need to..."
            />
            <br />
            <Button>Add</Button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
