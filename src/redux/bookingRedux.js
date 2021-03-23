import Axios from 'axios';
import { api } from '../settings';
import {dateToStr, addDays, numberToHour, hourToNumber } from '../utils';
/* selectors */
export const getAll = ({bookings}) => bookings.data;
export const getLoadingState = ({bookings}) => bookings.loading;
export const getBookingsForDate = ({bookings}, day) => bookings.data[day];

/* action name creator */
const reducerName = 'bookings';
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
  return async (dispatch, getState) => {
    try {
      dispatch(fetchStarted());
      const bookingData = await Axios.get(`${api.url}/api/${api.booking}`);
      const eventData = await Axios.get(`${api.url}/api/${api.event}`);
      const eventsNoRepeat = eventData.data.filter(event => event.repeat === false);
      const bookings = [...bookingData.data, ...eventsNoRepeat];

      const eventsRepeat = eventData.data.filter(event => event.repeat === 'daily');
      for (let event of eventsRepeat) {
        let today = dateToStr(new Date());
        for (let i = 0; i < 14; i++) {
          const currentDate = dateToStr(addDays(today, i));
          bookings.push({
            ...event,
            date: currentDate,
          });
          const hourNumber = hourToNumber(event.hour);

          for(let i = hourNumber; i < hourNumber + event.duration; i += 0.5) {
            bookings.push({
              ...event,
              hour: numberToHour(i),
              date: currentDate,
            });
          }
        }
      }
      const orderedBookings = {};
      let today = dateToStr(new Date());
      for (let i = 0; i < 14; i++) {
        const currentDate = dateToStr(addDays(today, i));
        orderedBookings[currentDate] = {};
        for(let i = 12; i < 20; i += 0.5) {
          orderedBookings[currentDate][i] = bookings.filter(booking => {
            return booking.date === currentDate && booking.hour === numberToHour(i);
          });
        }
      }
      dispatch(fetchSuccess(orderedBookings));
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
