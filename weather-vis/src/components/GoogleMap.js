import React, { Component } from "react";
import "./GoogleMap.css";

class GoogleMap extends Component {
  mapsConfig = {
    zoom: 10,
    center: {
      lat: this.props.lat,
      lng: this.props.lon
    }
  };

  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, this.mapsConfig);
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
