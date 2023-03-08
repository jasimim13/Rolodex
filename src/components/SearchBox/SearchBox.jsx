import React, { Component } from "react";
import "../../styles/SearchBox.css"

export class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        ></input>
      </div>
    );
  }
}

export default SearchBox;
