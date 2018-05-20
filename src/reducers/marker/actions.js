import { createAction } from 'redux-actions';

import {
    SET_MARKER,
    CLOSE_MARKER
 } from './constants';

const set = createAction(SET_MARKER);
export const closeMarker = createAction(CLOSE_MARKER);

export const setMarker = item => async dispatch => {
  dispatch(set(item));
}
