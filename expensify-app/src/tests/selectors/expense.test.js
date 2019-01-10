import moment from 'moment';

// test data
import expenses from '../fixtures/expenses';
import filters from '../fixtures/filters';

// selector
import selector from '../../selectors/expenses';

// utility
import reverseArray from '../utils/reverse-array';


test('should filter by the text value', () => {
  const filter = {
    ...filters,
    text: 'Data'
  };
  const result = selector(expenses, filter);
  expect(result).toEqual(reverseArray(expenses));
});

test('should filter by startDate', () => {
  const filter = {
    ...filters,
    startDate: moment(0).add(2, 'days')
  };

  const result = selector(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by endDate', () => {
  const filter = {
    ...filters,
    endDate: moment(0).add(7, 'days')
  };

  const result = selector(expenses, filter);
  expect(result).toEqual(reverseArray(expenses));
});

test('should sort by date', () => {
  const filter = {
    ...filters,
    sortBy: 'date'
  };

  const result = selector(expenses, filter);
  expect(result).toEqual(reverseArray(expenses));
});

test('should sort by amount', () => {
  const filter = {
    ...filters,
    sortBy: 'amount'
  };

  const result = selector(expenses, filter);
  expect(result).toEqual(reverseArray(expenses));
});

