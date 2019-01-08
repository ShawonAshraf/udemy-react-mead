import React from 'react';
import moment from 'moment';
// this is required in the new version of react-dates
// check here: https://github.com/airbnb/react-dates/issues/845
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  };

  // onChange handlers

  // description
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description
      };
    });
  };

  // note
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  // amount
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  // date
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };

  // focus
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  // render
  render() {
    return <div>
      <form>
        <input
          type={"text"}
          placeholder={"Description"}
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <input
          type={"number"}
          placeholder={"Amount"}
          value={this.state.amount}
          onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          placeholder={"Add a note for your expense"}
          value={this.state.note}
          onChange={this.onNoteChange}
        />

        <button>Submit</button>
      </form>
    </div>
  };
}
