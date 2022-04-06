import React from "react";
import "./App.css";
import { Search } from "../SearchBar/SearchBar";
import { createArray } from "./helperFunction";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      stringOfWords: ""
    };

    this.newWord = this.newWord.bind(this);
    this.makeList = this.makeList.bind(this);
  }

  newWord(newWord) {
    this.setState({
      word: newWord,
    });
    if(this.state.newWord == null) {
      this.setState({
        stringOfWords: ''
      })
    }
  }

  makeList() {
    const url = "https://api.datamuse.com/words?sl=";
    const value = this.state.word;
    const endUrl = `${url}${value}`;

    fetch(endUrl, { cache: "no-cache" })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (error) => {
          console.log(error.message);
        }
      )
      .then((jsonResponse) => {
        this.setState({
          stringOfWords: createArray(jsonResponse)
        });
      });

      console.log(this.state.stringOfWords);
  }

  render() {
    return (
      <div className="container">
        <h1>I'm waiting for your beautiful word!</h1>
        <Search
          word={this.state.word}
          wordlist={this.state.stringOfWords}
          putWord={this.newWord}
          makeList={this.makeList}
        />
      </div>
    );
  }
}

export default App;
