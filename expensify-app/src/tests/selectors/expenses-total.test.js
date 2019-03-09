// test data
import expenses from '../fixtures/expenses';

// import the module
import total from '../../selectors/expenses-total';

test('should return 0 if no expense is passed', () => {
  const result = total([]);
  expect(result).toBe(0);
});

test('should return sum of amount for fixtures', () => {
  const result = total(expenses);
  expect(result).toBe(6);
});
