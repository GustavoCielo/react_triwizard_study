import { Component } from "react";
import Card from "./components/Card";
import "./App.css";

export default class App extends Component {
  state = {
    characters: [],
    isShowing: false,
    showCharacters: [],
  };

  componentDidMount() {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((res) => res.json())
      .then((res) => this.setState({ characters: res }))
      .catch((err) => console.log("erro", err));
  }

  randomChars = () => {
    const { characters, isShowing } = this.state;
    let copyArray = characters;
    let charArray = [];
    for (let i = 0; i < 3; i++) {
      let j = Math.floor(Math.random() * (copyArray.length - 1 - 0 + 1) + 0);
      let student = copyArray[j];
      charArray.push(student);
      copyArray = copyArray.filter((char) => {
        return char.house !== student.house;
      });
    }
    this.setState({ showCharacters: charArray });
    this.setState({ isShowing: !isShowing });
  };

  render() {
    const { isShowing, showCharacters } = this.state;
    return (
      <div className="App">
        <main>
          {isShowing ? (
            <>
              <div className="mainContainer">
                <Card list={showCharacters} />
              </div>
              <button
                className="absolutePositioned"
                onClick={() =>
                  this.setState({
                    showCharacters: [],
                    isShowing: !isShowing,
                  })
                }
              >
                Test again
              </button>
            </>
          ) : (
            <div className="initialContainer">
              <h1>Welcome to the Triwizard Tournament</h1>
              <h3>Click on the button to find wizards</h3>
              <button onClick={this.randomChars}>Begin!</button>
            </div>
          )}
        </main>
      </div>
    );
  }
}
