import Axios from 'axios';
import { api } from '../settings';
//import {dateToStr, addDays, numberToHour, hourToNumber } from '../utils';
/* selectors */
export const getLoadingState = ({dishes}) => dishes.loading;

/* action name creator */
const reducerName = 'dishes';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
/* thunk creators */

export const fetchFromAPI = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const dishesData = await Axios.get(`${api.url}/api/${api.dishes}`);
      
      dispatch(fetchSuccess(dishesData.data));
    }
    catch(err){
      dispatch(fetchError(err.message || true));
    }
  };
};


/* reducer */

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}