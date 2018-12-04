import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ElementCreator from "./ElementCreator";

class App extends Component {
  state = {
    input: "",
    list: [],
    test: "hello"
  };

  onChange = e => {
    console.log("*** things changed ***", this.state.input);
    this.setState({
      input: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  };

  render() {
    console.log("this is state " + this.state.input);
    return (
      <div className="App">
        <header className="App-header">
          <h1>My To-Do List</h1>
          <ElementCreator starTrek={this.state.list} />
          <form onSubmit={this.onSubmit}>
            <input value={this.state.input} onChange={this.onChange} />
            <br />
            <button>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
