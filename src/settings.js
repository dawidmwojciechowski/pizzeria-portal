export const api = {
  url: '//' + window.location.hostname + (window.location.hostname==='localhost' ? ':3131' : ''),
  table: 'table',
  products: 'products',
  order: 'order',
  booking: 'booking',
  dishes: 'dishes',
  event: 'event',
  dateStartParamKey: 'date_gte',
  dateEndParamKey: 'date_lte',
  notRepeatParam: 'repeat=false',
  repeatParam: 'repeat_ne=false',
};