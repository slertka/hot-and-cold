import React, { Component } from "react";
import "./App.css";

import Input from "./components/Input";
import Reset from "./components/Reset.js";
import NumbersGuessed from "./components/NumbersGuessed";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNum: Math.floor(Math.random() * 100),
      userGuess: "",
      guessedNums: [],
      result: ""
    };
  }

  handleChange = e => {
    this.setState({
      userGuess: e.target.value
    });
  };

  guessNumber = () => {
    const { userGuess, randomNum, guessedNums } = this.state;

    // Error if user does not input anything
    if (userGuess === "") {
      this.setState({ result: "Enter a valid number!" });
    }

    let guess = parseInt(userGuess, 10);

    // Error if input is not a number
    if (typeof guess !== Number) {
      this.setState({ result: "Enter a valid number! " });
    }

    // push guesses to guessedNums array
    // check if number already exists in array
    if (!guessedNums.includes(guess)) {
      guessedNums.push(guess);
    } else {
      return this.setState({ result: "You've already guessed that number!" });
    }

    // Logic
    let diff = Math.abs(guess - randomNum);
    if (diff === 0) {
      this.setState({ result: "correct!" });
    } else if (diff >= 30) {
      this.setState({ result: "cold" });
    } else if (diff >= 20) {
      this.setState({ result: "warm" });
    } else if (diff >= 10) {
      this.setState({ result: "hot" });
    } else if (diff >= 5) {
      this.setState({ result: "very hot!" });
    }
  };

  resetNumber = () => {
    this.setState({
      randomNum: Math.floor(Math.random() * 100),
      guessedNums: [],
      result: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hot and Cold</h1>
        <h2>Guess a number between 1 and 100</h2>
        <h3>{this.state.result}</h3>
        <Input
          type={"text"}
          label={"Guess a number: "}
          inputValue={this.state.userGuess}
          handleChange={e => this.handleChange(e)}
        />
        <Input type={"submit"} handleClick={e => this.guessNumber()} />
        <Reset label={"Reset Number"} handleClick={e => this.resetNumber()} />
        <NumbersGuessed guessArr={this.state.guessedNums} />
      </div>
    );
  }
}

export default App;
