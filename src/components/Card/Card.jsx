import React, { Component } from "react";
import "../../styles/Card.css"
export class Card extends Component {
  render() {
    const { cardItem } = this.props;
    const { name, email, id } = cardItem;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monsters ${name}`}
          src={`https://robohash.org/${id}?set=set5`}
        />
        <h1 className="text" >{name}</h1>
        <p className="text" >{email}</p>
      </div>
    );
  }
}

export default Card;
