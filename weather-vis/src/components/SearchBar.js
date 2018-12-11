import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  getData = event => {
    event.preventDefault();
    console.log("form submitted");
  };
  onInputChange = e => {
    this.setState({term: e.target.value});
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.getData}>
          <input value={this.state.term} onChange={this.onInputChange} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              SUBMIT
            </button>
          </span>
        </form>
      </div>
    );
  }
}

export default SearchBar;
