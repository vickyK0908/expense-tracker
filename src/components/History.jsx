import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem.js';

function History({ expenses, deleteExpense }) {
  const [search, setSearch] = useState('');

  const filtered = expenses.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase()) ||
    e.category.toLowerCase().includes(search.toLowerCase())
  );

  const total = filtered.reduce((sum, e) => sum + e.amount, 0);

  // Group by month-year
  const grouped = filtered.reduce((acc, expense) => {
    const monthYear = new Date(expense.date).toLocaleDateString('en-IN', {
      month: 'long', year: 'numeric',
    });
    if (!acc[monthYear]) acc[monthYear] = [];
    acc[monthYear].push(expense);
    return acc;
  }, {});

  const monthYearEntries = Object.entries(grouped);

  return (
    <div className="history-page">
      <div className="history-header">
        <div className="history-header-content">
          <h2 className="history-title">📜 Expense History</h2>
          <p className="history-subtitle">All your past expenses in one place</p>
        </div>
        <div className="history-stats">
          <span className="stats-label">Total Records</span>
          <span className="stats-value">{expenses.length}</span>
        </div>
      </div>

      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search by title or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {expenses.length > 0 && (
        <div className="summary-card history-summary">
          <div className="summary-icon">💵</div>
          <div className="summary-content">
            <span className="summary-label">Total (filtered)</span>
            <span className="summary-amount">₹{total.toFixed(2)}</span>
          </div>
          <div className="summary-badge">
            <span className="summary-count">{filtered.length} record{filtered.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      )}

      {expenses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <p className="empty-msg">No history yet</p>
          <p className="empty-hint">Start adding expenses on the Home page!</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔎</div>
          <p className="empty-msg">No matches found</p>
          <p className="empty-hint">Try a different search term for "{search}"</p>
        </div>
      ) : (
        monthYearEntries.map(([monthYear, items]) => (
          <div key={monthYear} className="history-group">
            <div className="group-header">
              <h3 className="group-label">{monthYear}</h3>
              <span className="group-count">{items.length} item{items.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="expense-list">
              {items.map((expense) => (
                <ExpenseItem key={expense.id} expense={expense} onDelete={deleteExpense} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

History.propTypes = {
  expenses: PropTypes.array.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default History;
