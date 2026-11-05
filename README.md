# FINMATE AI — Personal Finance Management System

A simple, responsive personal finance web application created for the **AI for Finance CIA-2** assignment. It supports income and expense tracking, budgets, savings goals, analytics, monthly reports, and optional Gemini-powered financial assistance.

## Features

- Dashboard with calculated balance, income, expenses, savings and charts.
- Create, edit, delete, search and filter transactions.
- Expense categorization suggestions. With a Gemini key this uses Gemini; without one it uses a clearly identified local rule-based fallback.
- Monthly category budgets with 75% and 100% warnings.
- Savings goals with contributions and progress tracking.
- Expense analytics and monthly savings trend.
- AI financial advisor and finance chatbot. Without Gemini, local rules answer supported questions and clearly remain a fallback.
- Monthly report with browser print-to-PDF.
- Data saved in browser localStorage.
- Responsive desktop and mobile layout.

## Requirements

- Node.js 18 or newer (https://nodejs.org/)
- A modern browser
- VS Code (recommended)

No npm packages are required. The server uses Node.js built-in modules.

## Run on Windows

1. Extract `FINMATE_AI_CIA2.zip`.
2. Open the extracted `finmate-ai` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

```bash
node --version
npm start
```

5. Open **http://localhost:3000** in your browser.

If `npm start` is unavailable, run `node server.js`.

## Enable live Gemini AI (optional)

The core finance features work without an API key. To enable live Gemini responses:

1. Obtain a Gemini API key from Google AI Studio.
2. In the project root, make a copy of `.env.example` and name it `.env`.
3. Open `.env` and set:

```env
GEMINI_API_KEY=your_actual_api_key_here
GEMINI_MODEL=gemini-2.5-flash
PORT=3000
```

4. Stop and restart the server (`Ctrl+C`, then `npm start`).

The key is read by the backend and is not embedded in frontend JavaScript. Do not share your `.env` file or commit it to Git. Availability and model names can vary by Google account and API access.

## Demo data and persistence

The first launch includes editable sample transactions, budgets and savings goals. Data is saved in the browser's localStorage and remains after refresh on the same browser profile. It is local demo storage, not cloud sync or multi-user storage.

To restore sample data, open the browser developer console and run:

```js
resetDemoData()
```

This asks for confirmation and replaces the current local data with the initial sample set. To clear all FINMATE data manually, run `localStorage.removeItem('finmate-data')` in the browser console and refresh.

## How to demonstrate

1. Open Dashboard and explain the live financial totals.
2. Go to Transactions → add an income or expense and show the dashboard update.
3. Use AI suggest on a transaction. If Gemini is not configured, explain that the app transparently switches to a rule-based suggestion.
4. Create or edit a budget and show category spending and warning thresholds.
5. Add money to a savings goal and show its progress increase.
6. Open Analytics and explain category spending and savings trend charts.
7. Open AI Advisor and generate recommendations from the current records.
8. Ask the chatbot about monthly expenses or budgets.
9. Open Reports and select Download PDF; choose Save as PDF in the browser print dialog.

## Project structure

```text
finmate-ai/
├── index.html       # Application shell and forms
├── styles.css       # Responsive fintech design
├── app.js           # UI, calculations, storage and interactions
├── server.js        # Static server and optional Gemini API proxy
├── package.json     # Run script
├── .env.example     # Optional Gemini configuration template
├── .gitignore
├── PROJECT_REPORT.md
└── README.md
```

## Important limitations

- This is a student demonstration application, not a regulated financial service.
- Transactions are stored locally in the current browser; there is no account login, cloud backup or bank integration.
- The local fallback is rule-based, not a trained machine-learning model. Live generative AI requests use Gemini only after configuring a valid key.
- Financial guidance is educational and not investment, tax or legal advice.
- The app uses sample dates around November 2026; you can edit or delete them.
