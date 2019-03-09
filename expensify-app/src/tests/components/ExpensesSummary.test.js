import React from 'react';
import { shallow } from 'enzyme';

import ExpensesSummary from '../../components/ExpensesSummary';

test('should correctly render component with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={1}
    expensesTotal={4} />);

  expect(wrapper).toMatchSnapshot();
});

test('should correctly render component with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    expenseCount={5}
    expensesTotal={20} />);

  expect(wrapper).toMatchSnapshot();
});
