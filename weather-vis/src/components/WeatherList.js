import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import GoogleMap from "./GoogleMap";

class WeatherList extends Component {
  renderWeatherList = cityData => {
    const temps = cityData.list.map(weather => weather.main.temp);
    const tempsInDegrees = temps.map(temperature => temperature - 273.15);
    const winds = cityData.list.map(weather => weather.wind.speed);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={`${cityData.city.name}_${cityData.city.id}`}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
          {/* {cityData.city.name} */}
        </td>
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
    console.log(
      "weather array....",
      Boolean(this.props.weather),
      this.props.weather
    );

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
  return { weather: state.weather };
};

export default connect(mapStateToProps)(WeatherList);
