# React Big Calendar with Bar Graph

Demo project: a small React app that integrates React Big Calendar and shows date-wise data via a popup bar chart.

Features
- React Big Calendar integration (month/week/day views)
- Redux store to hold dummy data and selected date
- Dummy JSON-like data (dates in dd-MM-yyyy)
- Highlight dates that have data and selected date
- Click a highlighted date to open a popup with a Recharts bar chart
- Show a warning popup when no data exists for a selected date

Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open http://localhost:5173 (or the address Vite prints).

Notes
- The project uses `react-big-calendar` with `date-fns` localizer.
- UI is intentionally minimal to focus on functionality.

Files of interest
- `src/components/CalendarView.jsx` — calendar, highlighting and date selection
- `src/components/DateModal.jsx` — popup with bar chart (Recharts)
- `src/data/dummyData.js` — sample date-keyed data
- `src/store` — Redux store and slice

Cross-platform
This is a pure React / Vite app and should run on macOS, Windows, and Linux where Node.js is supported.

If you want more enhancements (tests, additional styling, exporting data), I can add them next.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
