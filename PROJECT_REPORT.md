# FINMATE AI — AI-Powered Personal Finance Management System

**Course:** AI for Finance  
**Assignment:** CIA-2 — AI-Powered Project Development  
**Project type:** Web application

## 1. Abstract

FINMATE AI is a personal finance management web application designed to help users record income and expenses, understand spending patterns, manage budgets and track savings goals. The application calculates financial summaries from user-entered transactions and provides charts and monthly reports. It also includes optional integration with Google's Gemini generative AI for transaction categorization, financial analysis and conversational finance assistance. When an API key is not configured, the application continues to work using transparent rule-based suggestions for supported tasks.

## 2. Introduction

Managing personal money can be difficult when income and expenses are not recorded consistently. People may not know which categories consume most of their money or whether they are staying within a budget. FINMATE AI brings common personal finance activities into one simple dashboard. It is intended as an educational prototype and uses Indian Rupees (INR) for its sample data.

## 3. Problem Statement

Many individuals do not have a simple way to record transactions, compare income with expenses, monitor category budgets and review progress toward savings targets. Manual calculations can be time-consuming and make spending patterns harder to understand. A simple digital system with analytics and AI-assisted explanations can make this information easier to review.

## 4. Objectives

- Provide a single interface to record income and expenses.
- Calculate balance, monthly income, expenses and savings.
- Organize transactions into useful categories.
- Help users set budgets and monitor spending limits.
- Track savings goals and contributions.
- Visualize financial activity through charts.
- Demonstrate how generative AI can assist with categorization and personalized financial explanations.
- Generate a monthly financial report.

## 5. Proposed System

The proposed system is a browser-based application. Users add and manage transactions through forms. The application stores the records in browser localStorage and calculates dashboard totals from those records. Budget spending is calculated from expense transactions in the current month. Savings goal progress is calculated from the amount saved compared with the target. The optional Node.js backend provides endpoints that send a user's financial summary or transaction description to the Gemini API.

## 6. Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Application structure |
| CSS | Responsive user interface and visual design |
| JavaScript | Application logic, calculations and interactions |
| Node.js | Local development server and backend API |
| Gemini API (optional) | AI categorization, analysis and chatbot responses |
| localStorage | Browser-based data persistence |
| SVG and CSS | Financial charts and progress indicators |

The project intentionally uses a small dependency footprint so it is easy to install and explain.

## 7. System Architecture

1. **Presentation layer:** HTML and CSS display the dashboard, transaction forms, budget cards, savings goals, charts and reports.
2. **Application layer:** JavaScript validates input, updates records, calculates totals, filters transactions and renders the pages.
3. **Storage layer:** Browser localStorage stores transactions, budgets and savings goals on the user's device.
4. **AI service layer:** The Node.js server exposes `/api/categorize`, `/api/analyze` and `/api/chat`. When a Gemini API key is configured, the server sends the relevant prompt to Gemini and returns its response.

## 8. AI Implementation

The project demonstrates AI in three areas:

- **Transaction categorization:** A transaction title and amount are sent to Gemini with a list of allowed categories. The model is asked to return a category and transaction type. The user can review the suggestion before saving it.
- **Financial analysis:** A compact summary of income, expenses, category totals, budgets and savings goals is sent to Gemini. The model returns observations and practical savings recommendations based on the supplied data.
- **Financial chatbot:** The user's question and a financial summary are sent to Gemini so the assistant can answer questions about the user's recorded finances.

A valid Gemini API key is required for live generative AI. If the key is unavailable, the application displays a transparent fallback: category suggestions and answers are produced by local rules. This fallback is not represented as a trained AI model. No machine-learning model is trained as part of this project.

## 9. Features and Modules

### Dashboard
Shows total recorded balance, current-month income, expenses and savings. It includes a six-month income-versus-expense chart, category spending and recent transactions.

### Transaction Management
Users can add, edit, delete, search and filter income and expense records. Each transaction has a title, amount, type, category, date and optional description.

### Budget Management
Users can create, edit and delete category budgets. The app calculates spending and remaining limits from current-month expenses. It displays alerts at 75% and 100% utilization.

### Savings Goals
Users can create a goal with a target amount and date, add contributions, edit it and delete it. The application calculates completion percentage and a suggested monthly contribution based on the remaining amount and target date.

### Analytics
Charts show category-wise expenses and the net savings trend over recent months. Values update when transactions change.

### AI Advisor and Chatbot
The advisor generates financial observations and recommendations. The chatbot answers common questions about expenses, categories, budgets and saving. Gemini is used when configured; otherwise, local rule-based responses are clearly identified.

### Monthly Reports
The report summarizes income, expenses, savings, category breakdown, budget performance and savings goals. The browser print dialog can save the report as a PDF.

## 10. Working Methodology

1. The user opens the application in a browser.
2. Demo records are loaded on the first launch.
3. The user adds or edits financial transactions.
4. JavaScript validates and stores the updated records in localStorage.
5. Dashboard and analytics calculations use the stored records.
6. Budget and savings modules calculate progress from the same data.
7. For AI features, the frontend sends relevant data to the local backend. The backend calls Gemini only if an API key is configured.
8. The user reviews insights and generates a monthly report.

## 11. Sample Data

The demonstration dataset includes sample salary and freelance income, food purchases, transport costs, shopping, utility bills, education costs and other common transactions. Sample budgets are created for categories such as Food, Shopping, Transportation, Entertainment and Utilities. Sample savings goals include a laptop and an emergency fund. The sample records are editable and can be replaced with the user's own demonstration data.

## 12. Advantages

- Simple and easy-to-use interface.
- Financial calculations update automatically.
- Transactions can be searched and filtered.
- Budgets and savings goals are easy to monitor.
- Charts make spending patterns easier to understand.
- Optional generative AI provides natural-language assistance.
- Data remains available after refresh in the same browser.
- Does not require a paid AI API to demonstrate core finance features.

## 13. Limitations

- The prototype does not connect to real bank accounts or payment services.
- Data is stored in the current browser and is not synchronized across devices.
- Live Gemini functionality requires an API key and internet access.
- Rule-based fallback suggestions are limited and are not machine learning.
- Sample data is for demonstration only.
- The system is not a certified financial advisory service.

## 14. Future Enhancements

- Firebase authentication and cloud database synchronization.
- Secure import of bank statements or CSV files.
- More detailed recurring transaction support.
- User-defined categories and custom date-range reports.
- More robust server-side authentication, rate limiting and data protection.
- Improved AI evaluation and feedback on recommendation quality.

## 15. Conclusion

FINMATE AI demonstrates how a simple web application can support personal financial management through transaction tracking, budgeting, savings goals and analytics. Its optional Gemini integration shows how generative AI can assist with categorization and explain financial patterns in natural language. The project meets the assignment's goal of applying AI tools to a real-world financial problem while keeping the application understandable and practical for a student demonstration.
