import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";

class WeatherList extends Component {
  renderWeatherList = cityData => {
    var temps = cityData.list.map(weather => weather.main.temp );
    const tempsInDegrees = temps.map(temperature => temperature - 273.15);

    const winds = cityData.list.map(weather => weather.wind.speed);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={`${cityData.city.name}_${cityData.city.id}`}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={tempsInDegrees} color="red" unit="degrees celsius" />
        </td>
        <td>
          <Chart data={winds} color="green" unit="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="orange" unit="%" />
        </td>
      </tr>
    );
  };
  render() {
    console.log('weather array....', this.props.weather);
  
    if (!this.props.weather) return <div />;

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temp(C)</th>
              <th>Wind(hPa)</th>
              <th>Humidity(%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderWeatherList)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { weather: state.weather};
};

export default connect(mapStateToProps)(WeatherList);
