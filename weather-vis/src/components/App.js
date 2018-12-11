import React, { Component } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import WeatherList from './WeatherList'

class App extends Component {
  render() {
    return (
      <div style={{width:'80%', margin:'25px auto'}}>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
