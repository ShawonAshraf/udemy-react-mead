import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';


test('should set up expense list item with provided props', () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem expense={expense} key={expense.id} />);

  expect(wrapper).toMatchSnapshot();
});
