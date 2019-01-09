import moment from 'moment';

// match strings
const matchText = (a, b) => {
  return a.includes(b);
};

// get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
    const textMatch = matchText(expense.description.toLowerCase(), text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
