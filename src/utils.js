export const dateToStr = function(dateObj){
  return dateObj.toISOString().slice(0, 10);
};
  
export const addDays = function(dateStr, days){
  const dateObj = new Date(dateStr);
  dateObj.setDate(dateObj.getDate() + days);
  return dateObj;
};

export const numberToHour = function(number){
  return (Math.floor(number) % 24) + ':' + (number % 1 * 60 + '').padStart(2, '0');
};
  
export const hourToNumber = function(hour){
  const parts = hour.split(':');
  
  return parseInt(parts[0]) + parseInt(parts[1])/60;
};