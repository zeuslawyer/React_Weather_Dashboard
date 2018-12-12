import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_KEY;
const BASE_URL =
  "https://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  console.log("fetch data action creator fired....");
  const url = `${BASE_URL}&q=${city}`;
  // redux-promise will intercept & await till response resolves before
  //handing it to reducer

  let response = axios.get(url);
  
    return {
      type: FETCH_WEATHER,
      payload: response
    };

};
