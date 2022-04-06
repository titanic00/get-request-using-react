import React from "react";

export class ShowWords extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.currentWord}</h1>
        <h1>{this.props.listOfWords}</h1>
      </div>
    );
  }
}
