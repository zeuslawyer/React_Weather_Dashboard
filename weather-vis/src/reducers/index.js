
import { combineReducers } from 'redux';
import {FETCH_WEATHER} from '../actions/index'

const weatherRedcuer =(state={}, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log('action received...', action);
      return {...state, ...action.payload.data};
    default:
    console.log('unmatched action type received...', action);
      return state;
  }
}



const rootReducer = combineReducers({
  weather: weatherRedcuer
});

export default rootReducer;