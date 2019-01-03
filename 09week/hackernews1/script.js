"use strict";

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsListItem from "./NewsListItem";

class App extends Component {
  state = {
    stories: []
  };
  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(data => data.json())
      .then(data => {
        const formattedData = data.slice(0, 30);
        formattedData.forEach(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(newsData => newsData.json())
            .then(newsData => {
              // const newStories = this.state.stories.slice();
              // newStories.push(newsData);
              this.setState({ stories: [...this.state.stories, newsData] });
            });
        });
      });
  }
  renderListItems() {
    return this.state.stories.map((item, index) => {
      return <NewsListItem key={index} title={item.title} url={item.url} />;
    });
  }

  render() {
    return (
      <div>
        <ol>{this.renderListItems()}</ol>
      </div>
    );
  }
}

export default App;
