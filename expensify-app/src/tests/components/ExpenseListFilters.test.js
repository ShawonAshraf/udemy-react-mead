import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import filters from '../fixtures/filters';

test('should set up expense list filters with the provided filter', () => {
  const wrapper = shallow(<ExpenseListFilters filters={filters} />);
  expect(wrapper).toMatchSnapshot();
});
