import React, { Component } from "react";
import {connect} from 'react-redux'


class WeatherList extends Component {

  renderWeatherList=(cityData)=>{

    
  }
  render() {
    if (!this.props.weather.list) return null; 
    
    const {list} = this.props.weather.list
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
            {/* {list.map(this.renderWeatherList) */}

            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { weather: state.weather };
};


export default connect(mapStateToProps)(WeatherList);
