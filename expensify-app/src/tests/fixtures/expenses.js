import moment from 'moment';

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

export default expenses;
