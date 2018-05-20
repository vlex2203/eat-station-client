import { handleActions } from 'redux-actions';
import {
  SET_MARKER,
  CLOSE_MARKER
 } from './constants';

export const initialState = {
  data: null
};

export default handleActions({
  [SET_MARKER]: (state, action) => {
		return {
      ...state,
      data: action.payload
		}
	},
	[CLOSE_MARKER]: (state, action) => {
		return {
			...state,
      data: null
		}
  }
}, initialState);
