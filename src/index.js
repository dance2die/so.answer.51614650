import React, { Component } from "react";
import ReactDOM from "react-dom";

const buttonStyle = {
  margin: "10px 10px 10px 0"
};

class ButtonClicks extends Component {
  state = {
    buttons: []
  };

  // If you use an arrow syntax, there is no need to bind
  // this.onClick = this.onClick.bind(this) in constructor is unncessary.
  onClick = e => {
    console.log("hello world");
  };

  render() {
    // Construct a list of Buttons.
    // You need a "key" to let React know which state has been changed.
    const buttons = [...Array(10).keys()].map(id => (
      <button key={id} style={buttonStyle} onClick={this.onClick}>
        {`Button #${id}`}
      </button>
    ));
    // You can't return an array of object.
    // So you need to wrap it in a container like "div" or "React.Fragment"
    return <div>{buttons}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ButtonClicks />, rootElement);
