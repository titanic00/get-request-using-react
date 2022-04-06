import React from "react";
import { ShowWords } from "../ShowWords/ShowWords";

export class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.makeList();
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.putWord(value);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.props.word}
          />
          <button>CLICK</button>
        </form>
        <ShowWords
          currentWord={this.props.word}
          listOfWords={this.props.wordlist}
        />
      </div>
    );
  }
}
