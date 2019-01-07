// filter actions

// set filter text
export const setTextFilter = (text = '') => {
  return {
    type: 'SET_FILTER_TEXT',
    text
  };
};

// set start date
export const setStartDate = (startDate = 0) => {
  return {
    type: 'SET_START_DATE',
    startDate
  };
};

// set end date
export const setEndDate = (endDate = 0) => {
  return {
    type: 'SET_END_DATE',
    endDate
  };
};

// sort by amount
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

// sort by date
export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};
