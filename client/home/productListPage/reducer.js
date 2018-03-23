import sortBy from 'lodash/sortBy';
import { RESOLVED_CARS_LIST } from './actions';

const defaultState = {
  carsList: [],
};

const sortCarList = list => sortBy(list, ['name', function (item) {
  if (item.stockStatus === 'In DealerShip') return 1;
  if (item.stockStatus === 'Out of Stock') return 2;
  if (item.stockStatus === 'Unavailable') return 3;
}]);

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESOLVED_CARS_LIST: {
      const carsList = sortCarList(action.payload);
      return {
        carsList: [...carsList],
      };
    }
    default:
      return state;
  }
};
