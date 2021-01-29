import React, { Component } from "react";

class InputElementClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <br />
        {this.state.inputText}
      </div>
    );
  }
}

export default InputElementClass;
