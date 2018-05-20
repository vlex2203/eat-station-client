import { combineReducers } from 'redux';
import restaurants from './restaurants/reducer';
import marker from './marker/reducer';

export default combineReducers({
  restaurants,
  marker
});
