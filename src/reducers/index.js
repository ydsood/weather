import { combineReducers } from 'redux';
import WeatherReducer from './'
const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
