# NuKenzie — Personal Finance Tracker

**A streamlined React dashboard for tracking income, expenses, and available balance.**

[**↗ See live preview**](https://entrega-nukenzie-pedro-g9tk-iqgcbph2g.vercel.app/) · [**↗ Code on GitHub**](https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp/tree/review/i18n-pt-en-20261013)

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

The live preview reflects [the updated implementation branch](https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp/tree/review/i18n-pt-en-20261013). The default `master` branch is retained as an earlier project version.

```bash
git clone https://github.com/pedrohenriquebarrosn/NUKENZIE-FinancialApp.git
cd NUKENZIE-FinancialApp
git switch review/i18n-pt-en-20261013
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
