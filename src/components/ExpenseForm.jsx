import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      amount: '',
      category: 'Food',
      date: new Date().toISOString().split('T')[0],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, amount, category, date } = this.state;

    if (!title.trim() || !amount || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid title and a positive amount.');
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: parseFloat(amount),
      category,
      date,
    };

    this.props.onAdd(newExpense);

    this.setState({ 
      title: '', 
      amount: '', 
      category: 'Food', 
      date: new Date().toISOString().split('T')[0] 
    });
  }

  render() {
    const { title, amount, category, date } = this.state;

    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <div className="form-header">
          <span className="form-icon">➕</span>
          <h2 className="form-title">Add New Expense</h2>
        </div>
        <p className="form-subtitle">Track your spending by adding expenses below</p>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="title">
              <span className="label-icon">📝</span>
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Grocery shopping"
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">
              <span className="label-icon">💰</span>
              Amount (₹)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="0.00"
              value={amount}
              onChange={this.handleChange}
              min="0"
              step="0.01"
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">
              <span className="label-icon">🏷️</span>
              Category
            </label>
            <select id="category" name="category" value={category} onChange={this.handleChange}>
              <option value="Food">🍔 Food</option>
              <option value="Transport">🚌 Transport</option>
              <option value="Shopping">🛍️ Shopping</option>
              <option value="Entertainment">🎬 Entertainment</option>
              <option value="Health">💊 Health</option>
              <option value="Education">📚 Education</option>
              <option value="Other">📌 Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">
              <span className="label-icon">📅</span>
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn-add">
          <span className="btn-icon">✨</span>
          Add Expense
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ExpenseForm;
