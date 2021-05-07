import { Component } from "react";

export default class Student extends Component {
  render() {
    const { showCharacters } = this.props;
    return (
      <div className="container">
        <img src={showCharacters.image} alt={showCharacters.name} />
        <h2>{showCharacters.name}</h2>
        <p>Patronus: {showCharacters.patronus}</p>
        <p>House: {showCharacters.house}</p>
      </div>
    );
  }
}
