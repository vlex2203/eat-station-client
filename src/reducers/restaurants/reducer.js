import { handleActions } from 'redux-actions';
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,
  FETCH_RESTAURANTS_HIDE
 } from './constants';

export const initialState = {
  data: [],
  status: 'INIT',
  error: null,
  category: 'all'
};

export default handleActions({
  [FETCH_RESTAURANTS_REQUEST]: state => {
		return {
      ...state,
      data: [],
      category: '',
      status: 'REQUEST'
		}
	},
	[FETCH_RESTAURANTS_SUCCESS]: (state, action) => {
		return {
			...state,
      data: action.payload.restaurants,
      category: action.payload.category,
      status: 'SUCCESS'
		}
  },
  [FETCH_RESTAURANTS_FAIL]: (state, action) => {
		return {
			...state,
      data: [],
      error: action.payload.error,
      category: '',
      status: 'FAIL'
		}
	},
  [FETCH_RESTAURANTS_HIDE]: state => {
		return {
			...state,
      data: [],
      category: 'hide',
      status: 'SUCCESS'
		}
	}
}, initialState);
