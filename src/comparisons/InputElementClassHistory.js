import React, { Component } from "react";

class InputElementClassHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      historyList: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const inputText = e.target.value;
    this.setState((prevState) => {
      return {
        inputText,
        historyList: [...prevState.historyList, inputText],
      };
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <br />
        {this.state.inputText}
        <hr />
        <br />
        <ul>
          {this.state.historyList.map((rec, idx) => (
            <div key={idx}>{rec}</div>
          ))}
        </ul>
      </div>
    );
  }
}

export default InputElementClassHistory;
