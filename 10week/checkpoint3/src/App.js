import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    facts: [],
    randomFact: []
  };

  componentDidMount() {
    fetch("http://localhost:7979/facts")
      .then(data => data.json())
      .then(data => {
        this.setState({ facts: data.all });
      });
  }

  giveFact() {
    let number = Math.floor(Math.random() * 145);
    let newFact = this.state.facts[number];
    this.setState({ randomFact: newFact });
  }

  render() {
    return (
      <div class="button-and-fact">
        <div class="random-fact">{this.state.randomFact.text}</div>
        <div class="button" onClick={() => this.giveFact()}>
          Give me a cat fact right meow!
        </div>
      </div>
    );
  }
}

export default App;
