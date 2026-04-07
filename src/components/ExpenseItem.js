import React from 'react';
import PropTypes from 'prop-types';

const CATEGORY_ICONS = {
  Food: '🍔',
  Transport: '🚌',
  Shopping: '🛍️',
  Entertainment: '🎬',
  Health: '💊',
  Education: '📚',
  Other: '📌',
};

const CATEGORY_COLORS = {
  Food: '#f59e0b',
  Transport: '#3b82f6',
  Shopping: '#ec4899',
  Entertainment: '#8b5cf6',
  Health: '#10b981',
  Education: '#06b6d4',
  Other: '#6b7280',
};

function ExpenseItem({ expense, onDelete }) {
  const icon = CATEGORY_ICONS[expense.category] || '📌';
  const color = CATEGORY_COLORS[expense.category] || '#6b7280';

  return (
    <div className="expense-item">
      <div className="expense-icon" style={{ backgroundColor: color + '22', color }}>
        {icon}
      </div>

      <div className="expense-details">
        <span className="expense-title">{expense.title}</span>
        <span className="expense-meta">
          <span className="expense-category" style={{ color }}>{expense.category}</span>
          <span className="expense-separator">·</span>
          <span className="expense-date">{expense.date}</span>
        </span>
      </div>

      <div className="expense-right">
        <span className="expense-amount">- ₹{expense.amount.toFixed(2)}</span>
        <button
          className="btn-delete"
          onClick={() => onDelete(expense.id)}
          title="Delete expense"
        >
          <span className="delete-icon">🗑️</span>
          <span className="delete-text">Remove</span>
        </button>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseItem;
