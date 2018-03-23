import availability from 'test/mockData/availability.json';

export const LOAD_AVAILABILITY_LIST = 'LOAD_AVAILABILITY_LIST';
export const RESOLVED_AVAILABILITY_LIST = 'RESOLVED_AVAILABILITY_LIST';
export const REJECTED_AVAILABILITY_LIST = 'REJECTED_AVAILABILITY_LIST';

export function getAvailability(id) {
  return (dispatch) => {
    const availability = JSON.parse(availability);
    dispatch({ type: RESOLVED_AVAILABILITY_LIST, payload: availability })
  };
}
