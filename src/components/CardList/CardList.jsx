import React, { Component } from "react";
import '../../styles/CardList.css'
import Card from "../Card/Card";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <Card cardItem={monster} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default CardList;
