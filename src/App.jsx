import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.jsx';
import History from './components/History.jsx';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('expenses');
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <Router basename="/expense-tracker">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                expenses={expenses}
                addExpense={addExpense}
                deleteExpense={deleteExpense}
              />
            }
          />
          <Route
            path="/history"
            element={<History expenses={expenses} deleteExpense={deleteExpense} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
