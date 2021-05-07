import { Component } from "react";
import Student from "../Student";
import "./styles.css";

export default class Card extends Component {
  render() {
    const { list } = this.props;
    return list.map((item, index) => {
      return <Student showCharacters={item} key={index} />;
    });
  }
}
