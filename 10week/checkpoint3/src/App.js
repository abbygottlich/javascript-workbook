import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    facts: []
  };

  componentDidMount() {
    fetch("http://localhost:7979/facts")
      .then(data => data.json())
      .then(data => {
        this.setState({ facts: data.all });
      });
  }

  showFact() {
    return this.state.facts.map((item, index) => {
      return <li key={index}> {item.text} </li>;
    });
  }

  giveFact() {}

  render() {
    return (
      <div>
        <ul>{this.showFact()}</ul>
        <Button onClick={giveFact()}>Button</Button>
      </div>
    );
  }
}

export default App;
