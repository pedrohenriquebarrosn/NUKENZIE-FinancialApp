# NuKenzie — Personal Finance Tracker

**A streamlined React dashboard for tracking income, expenses, and available balance.**

[**↗ See live preview**](https://entrega-nukenzie-pedro-g9tk-iqgcbph2g.vercel.app/) · [**↗ Code on GitHub**](https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp)

## Overview

NuKenzie is an interactive financial-tracking project built during Full Stack training and refined as a bilingual portfolio demonstration. It focuses on clear data entry, predictable state updates, and immediate financial feedback.

## Key features

- Record income and expenses with a description and amount.
- View a structured transaction list and delete individual entries.
- Automatically calculate the total balance from recorded transactions.
- Validate amount, description, and transaction type.
- Switch between English and Portuguese in the responsive interface.
- Navigate between the welcome screen and financial dashboard.

## Technology stack

React 18 · JavaScript · Vite · CSS · React Hooks

## Explore and run locally

The default `master` branch now contains the reviewed source and regression tests. The hosted preview is a separate deployment; verify its commit before assuming it contains the latest fixes.

```bash
git clone https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp.git
cd NUKENZIE-FinancialApp
npm install
npm run dev
```

## Engineering and verification

- Transaction validation and balance calculations were refactored into testable logic.
- Automated domain checks and production builds passed during code review.
- The application intentionally keeps transactions in the current React session: refreshing starts a new session, with no bank connection or remote financial-data storage.

This is an educational finance interface, not a banking or payment platform.

---

## Author

**Pedro Henrique Barros Nascimento** — Business Administration graduate and Full Stack development alumnus of Kenzie Academy Brasil.

[GitHub profile](https://github.com/pedrohenriquebarrosn) · [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/)
