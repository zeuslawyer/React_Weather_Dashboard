import { combineReducers } from "redux";
import { FETCH_WEATHER } from "../actions/index";

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("action received in reducer...", action.payload.data, action.error);
      if(action.error) return state;
      return [action.payload.data, ...state];
    default:
      // console.log('unmatched action type received in reducer...', action);
      return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
