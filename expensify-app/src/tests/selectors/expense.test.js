import moment from 'moment';

import selector from '../../selectors/expenses';

// a little helper method
// since js array.reverse is destructive and changes the real array
// https://stackoverflow.com/questions/14450201/non-destructively-reversing-an-array-in-javascript
const reverseArray = (array) => {
  return array.reduce((ary, ele) => {
    ary.unshift(ele);
    return ary
  }, []);
};

// test for this function
// test('should reverse an array', () => {
//   const ar = [1, 2, 3];
//   const r = reverseArray(ar);
//   expect(r).toEqual([3, 2, 1]);
// });

// test data
const expenses = [
  {
    id: '1',
    description: 'Data01',
    amount: 1,
    createdAt: moment(0).add(1, 'days').valueOf()
  },
  {
    id: '2',
    description: 'Data02',
    amount: 2,
    createdAt: moment(0).add(2, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Data03',
    amount: 3,
    createdAt: moment(0).add(3, 'days').valueOf()
  }
];

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

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

