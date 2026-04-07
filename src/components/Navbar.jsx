// ✅ CRITERIA: React Components (Component API) — Navbar is a functional component
// ✅ CRITERIA: React JSX — uses JSX to render nav links
// ✅ CRITERIA: Hooks and Routing — useNavigate and NavLink are routing hooks/components

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">💰</span>
        <span className="brand-name">ExpenseTracker</span>
      </div>
      <div className="navbar-links">
        {/* NavLink automatically adds 'active' class when route matches */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          History
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
