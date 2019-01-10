import moment from 'moment';

import reducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = reducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to date', () => {
  const state = reducer(undefined, { type: 'SORT_BY_DATE' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set filter text', () => {
  const state = reducer(undefined, {
    type: 'SET_FILTER_TEXT',
    text: 'test text'
  });

  expect(state).toEqual({
    text: 'test text',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set start date', () => {
  const state = reducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment(0)
  });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment().endOf('month')
  });
});

test('should set end date', () => {
  const state = reducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment(0)
  });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment(0)
  });
});
