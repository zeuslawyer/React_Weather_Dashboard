import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeatherList = cityData => {
    return (
      <tr key={`${cityData.city.name}_${cityData.city.id}`}>
        <td>{cityData.city.name}</td>
        <td>{cityData.list[0].main.temp}</td>
        <td>{cityData.list[0].wind.speed}</td>
        <td>{cityData.list[0].main.humidity}</td>
      </tr>
    );
  };
  render() {
    console.log(this.props.weather);
    if (!this.props.weather) return <div />;

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temp </th>
              <th>Wind</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeatherList)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { weather: state.weather, response: state };
};

export default connect(mapStateToProps)(WeatherList);
