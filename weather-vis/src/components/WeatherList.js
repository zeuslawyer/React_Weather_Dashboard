import React, { Component } from "react";
import {connect} from 'react-redux'


class WeatherList extends Component {

  renderData=()=>{
    if (!this.props.weather.list) return <div></div>; 
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
          <tbody>
            <tr>
              <td>{this.props.weather.city.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return this.renderData();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { weather: state.weather };
};


export default connect(mapStateToProps)(WeatherList);
