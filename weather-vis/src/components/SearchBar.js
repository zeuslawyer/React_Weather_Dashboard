import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  state = { term: "", test: {name:'zp'} };
  counter = 0;
  counter2=0

  onFormSubmit = event => {
    event.preventDefault();
    console.log("form submitted with term: ", this.state.term);
    this.props.fetchWeather(this.state.term);
    if (!this.state.weather) this.setState({term:''})
    
  };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  componentDidMount=()=>{
    console.log('mountCount...', this.counter++);
  }
  componentDidUpdate=()=>{
    console.log('compUpdateCount:  ', this.counter2++);
    var test = this.state.weather
    if (this.state.weather) this.setState({term:'', test:test})
  }


  render() {
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
  mapStateToProps,
  { fetchWeather }
)(SearchBar);
