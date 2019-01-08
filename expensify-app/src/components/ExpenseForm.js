import React from 'react';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
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

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

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