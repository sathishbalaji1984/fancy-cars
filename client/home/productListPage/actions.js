import axios from 'axios';

export const LOAD_CARS_LIST = 'LOAD_CARS_LIST';
export const RESOLVED_CARS_LIST = 'RESOLVED_CARS_LIST';
export const REJECTED_CARS_LIST = 'REJECTED_CARS_LIST';

export function getCars() {
  return dispatch => axios.get('./cars').then((response) => {
    dispatch({ type: RESOLVED_CARS_LIST, payload: response.data });
  }).catch(() => {
    dispatch({ type: REJECTED_CARS_LIST });
  });
}
