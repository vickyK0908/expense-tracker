# 💰 Expense Tracker — React Project

A basic React application built to satisfy all six professor-specified criteria.

---

## ✅ Criteria Satisfied

| Criterion | Where |
|---|---|
| **React JSX** | Every `.js` file uses JSX syntax |
| **React Components (Component API, Constructors)** | `ExpenseForm.js` is a **class component** with a `constructor`; all others are functional components (Component API) |
| **React Dataflow (State, Props, Props Validation)** | `useState` in `App.js`, `Home.js`, `History.js`; props passed through every component; `PropTypes` in `ExpenseForm`, `ExpenseItem`, `Home`, `History` |
| **Styling in React** | `App.css` external stylesheet + inline `style={{}}` objects in `ExpenseItem.js` |
| **Hooks and Routing** | `useState` & `useEffect` hooks; `react-router-dom` v6 with `BrowserRouter`, `Routes`, `Route`, `NavLink` |
| **Deploying React Applications** | Run `npm run build` → deploys to Netlify / Vercel / GitHub Pages (see below) |

---

## 🚀 Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Deploy

```bash
npm run build
```

This creates a `build/` folder with optimised static files.

### Netlify (easiest)
1. Run `npm run build`
2. Drag the `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add "homepage": "https://<username>.github.io/<repo>" to package.json
# Add "predeploy": "npm run build" and "deploy": "gh-pages -d build" to scripts
npm run deploy
```

---

## 🗂️ Project Structure

```
expense-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       ← Routing (NavLink)
│   │   ├── ExpenseForm.js  ← Class component + constructor + PropTypes
│   │   ├── ExpenseItem.js  ← Functional component + PropTypes + inline styles
│   │   ├── Home.js         ← useState hook + props + PropTypes
│   │   └── History.js      ← Route page + useState + PropTypes
│   ├── App.js              ← State + useEffect + React Router
│   ├── App.css             ← External CSS styling
│   └── index.js            ← ReactDOM entry point (deploy entry)
└── package.json
```
