import { createAction } from 'redux-actions';
import { get } from '../../services/restaurantsService';
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAIL,
  FETCH_RESTAURANTS_HIDE
 } from './constants';

const success = createAction(FETCH_RESTAURANTS_SUCCESS);
const fail = createAction(FETCH_RESTAURANTS_FAIL);
const request = createAction(FETCH_RESTAURANTS_REQUEST);
const hide = createAction(FETCH_RESTAURANTS_HIDE);

export const fetchRestaurants = (category = 'all') => async (dispatch) => {
  if(category === 'hide'){
    dispatch(hide());
  }else{
    dispatch(request());
    get(category).then(response => {
      const data = {
        restaurants: [...response],
        category
      }
      dispatch(success(data));
    }).catch(error => {
      dispatch(fail(error));
    });
  }
};
