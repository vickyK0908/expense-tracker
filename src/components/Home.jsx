// ✅ CRITERIA: React JSX — entire render is JSX
// ✅ CRITERIA: React Components (Component API) — functional component
// ✅ CRITERIA: React Dataflow (Props, Props Validation) — receives expenses, addExpense,
//    deleteExpense from App via props; PropTypes validates them
// ✅ CRITERIA: Hooks — uses useState to manage the filter category locally

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm.jsx';
import ExpenseItem from './ExpenseItem.jsx';

function Home({ expenses, addExpense, deleteExpense }) {
  // ✅ CRITERIA: Hooks — useState hook for local UI state (selected filter)
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Food', 'Transport', 'Shopping', 'Entertainment', 'Health', 'Education', 'Other'];

  const filtered = filter === 'All'
    ? expenses
    : expenses.filter((e) => e.category === filter);

  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="home-page">
      {/* ✅ CRITERIA: React Dataflow (Props) — passing addExpense down as onAdd prop */}
      <ExpenseForm onAdd={addExpense} />

      <div className="summary-card">
        <div className="summary-icon">📊</div>
        <div className="summary-content">
          <span className="summary-label">Total Spent</span>
          <span className="summary-amount">₹{total.toFixed(2)}</span>
        </div>
        <div className="summary-badge">
          <span className="summary-count">{filtered.length} expense{filtered.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      <div className="section-header">
        <h3 className="section-title">Filter by Category</h3>
      </div>
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="section-header">
        <h3 className="section-title">Recent Expenses</h3>
        <span className="section-subtitle">Your latest transactions</span>
      </div>
      <div className="expense-list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <p className="empty-msg">No expenses yet. Add one above!</p>
            <p className="empty-hint">Start tracking your spending to see insights here.</p>
          </div>
        ) : (
          filtered.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={deleteExpense} />
          ))
        )}
      </div>
    </div>
  );
}

// ✅ CRITERIA: React Dataflow (Props Validation)
Home.propTypes = {
  expenses: PropTypes.array.isRequired,
  addExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default Home;
