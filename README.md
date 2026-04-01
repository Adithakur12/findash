# Finance Dashboard

A frontend finance dashboard built with React and Chart.js, designed as an internship-ready project. It includes transaction search/filtering, an admin-only add/edit transaction modal, role switching, and interactive charts.

## Features

- React-based dashboard UI
- Search and filter transactions by type, category, and month
- Admin-only transaction creation, editing, and deletion
- Responsive sidebar navigation
- Interactive charts with Chart.js
- Dark mode toggle
- Local storage persistence for transactions, theme, and role

## Tech Stack

- React (loaded from CDN)
- Chart.js
- HTML / CSS
- Vanilla JavaScript for data handling

## Files

- `index.html` — main page shell and app styling
- `back.js` — React app logic, state, and chart rendering

## Run locally

1. Open the project folder in the terminal
2. Start a simple local server:
   ```powershell
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser

## How to use

- Use the sidebar to switch between Dashboard, Transactions, and Insights
- Search and filter transactions on the Transactions page
- Switch roles between `Admin` and `Viewer`
- Add or edit transactions only when logged in as `Admin`
- Toggle dark mode using the top-right button

## Notes

- No build tool is required; React runs directly in the browser using `@babel/standalone`
- Update the transaction list directly in the browser and persist changes using local storage

## Future improvements

- Add form validation and user authentication
- Move React code into a proper build setup with Create React App or Vite
- Add chart drill-downs and export capabilities
