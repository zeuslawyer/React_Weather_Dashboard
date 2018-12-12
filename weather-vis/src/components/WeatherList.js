import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from './Chart'

class WeatherList extends Component {
  renderWeatherList = cityData => {
    const temps = cityData.list.map(weather => {
      return weather.main.temp;
    });
    const winds = cityData.list.map(weather => {
      return weather.wind.speed;
    });
    const humidity = cityData.list.map(weather => {
      return weather.main.humidity;
    });
    console.log(humidity);

    return (
      <tr key={`${cityData.city.name}_${cityData.city.id}`}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color='red'/>
        </td>
        <td>
          <Chart data={winds} color='green'/>
        </td>
        <td>
          <Chart data={humidity} color='orange'/>
        </td>
        
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
