# NuKenzie — Personal Finance Dashboard

**A bilingual React application for recording income and expenses, organizing transactions, and calculating available balance instantly.**

[**Launch the live app ↗**](https://entrega-nukenzie-pedro-g9tk-iqgcbph2g.vercel.app/) · [**Professional portfolio ↗**](https://portfolio-pedro-barros-2026-review.vercel.app/en) · [**Test evidence ↗**](https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp/actions/runs/38476445682)

## Overview

NuKenzie offers a straightforward way to visualize everyday money movements. Add income or expense entries, review transaction history, and see the running balance respond immediately.

Originally built during Full Stack training, the project was refined with a responsive English/Portuguese experience and testable transaction and balance logic.

## Features

- **Income and expenses:** register transactions with description, amount, and category.
- **Transaction overview:** view and remove individual records.
- **Instant totals:** automatically recalculate the balance after each change.
- **Input validation:** check amount, description, and transaction type.
- **Bilingual navigation:** switch between English and Portuguese.
- **Responsive interface:** move between the welcome experience and financial dashboard across screen sizes.

## Stack

React 18 · JavaScript · Vite · CSS · React Hooks

## Try NuKenzie

**[Open the interactive finance dashboard ↗](https://entrega-nukenzie-pedro-g9tk-iqgcbph2g.vercel.app/)**

Add a few income and expense records to see the balance update. Transactions are stored in the current app session; reloading starts a fresh session.

### Run locally

```bash
git clone https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp.git
cd NUKENZIE-FinancialApp
npm install
npm run dev
```

## Engineering & verification

- Transaction validation and balance calculations are organized as testable logic.
- Automated domain checks and production build verification were recorded for the reviewed implementation.
- State updates keep the transaction list and calculated balance in sync.

[**View the recorded GitHub Actions checks ↗**](https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp/actions/runs/38476445682)

## About the developer

**Pedro Henrique Barros Nascimento** — Business Administration graduate (UNIFG) with Full Stack Web Development training at Kenzie Academy Brasil. Interested in applied AI, software development, and practical business solutions.

[GitHub](https://github.com/pedrohenriquebarrosn) · [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/) · [Portfolio EN](https://portfolio-pedro-barros-2026-review.vercel.app/en) · [Portfólio PT](https://portfolio-pedro-barros-2026-review.vercel.app/pt)
