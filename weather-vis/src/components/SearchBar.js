import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  state = { term: "" };
  counter = 1;
  counter2 = 1;
  counter3 = 1;

  onFormSubmit = event => {
    event.preventDefault();
    console.log("form submitted with term: ", this.state.term);
    this.props.fetchWeather(this.state.term);
  };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  componentDidMount = () => {
    console.log("mountCount...", this.counter++);
  };

  componentDidUpdate = () => {
    // console.log("compUpdateCount:  ", this.counter2++, this.props.weather.list);
  };

  render() {
    // console.log("render count:  ", this.counter3++, this.props.weather.list);
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Enter a city for its 5-day forecast"
            value={this.state.term}
            onChange={this.onInputChange}
            className="form-control"
          />
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

const mapStateToProps = (state, ownProps) => {
  return { weather: state.weather };
};

export default connect(
  null,
  { fetchWeather }
)(SearchBar);
