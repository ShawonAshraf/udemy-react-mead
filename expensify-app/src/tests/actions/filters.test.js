import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from '../../actions/filters';

// set
test('setTextFilter test', () => {
  const text = 'testing';
  const filter = setTextFilter(text);

  expect(filter).toEqual({
    type: 'SET_FILTER_TEXT',
    text
  });
});

test('setStartDate', () => {
  const startDate = 123;
  const filter = setStartDate(startDate);

  expect(filter).toEqual({
    type: 'SET_START_DATE',
    startDate
  });
});

test('setEndDate', () => {
  const endDate = 123;
  const filter = setEndDate(endDate);

  expect(filter).toEqual({
    type: 'SET_END_DATE',
    endDate
  });
});

// sort

test('sortByAmount', () => {
  const filter = sortByAmount();
  expect(filter).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('sortByDate', () => {
  const filter = sortByDate();
  expect(filter).toEqual({
    type: 'SORT_BY_DATE'
  });
});
