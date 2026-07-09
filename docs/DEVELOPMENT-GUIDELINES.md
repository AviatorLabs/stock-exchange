# Development Guidelines

This document defines the development standards used throughout the project.

---

# Naming Conventions

## Variables

Use camelCase.

```js
stockPrice
buyerPortfolio
currentUser
```

---

## Functions

Use camelCase.

```js
createStock()
renderDashboard()
validateInput()
```

---

## File Names

Use camelCase.

Examples:

```
buyerSignUp.js
sellerLogIn.js
availableStock.js
stockHolders.js
```

Avoid:

```
BuyerSignUp.js
buyer_sign_up.js
buyer-sign-up.js
```

---

## CSS Classes

Use kebab-case.

```css
.stock-card
.dashboard-header
.login-button
```

---

## IDs

Use kebab-case.

```html
<div id="stock-list">
```

---

## Constants

Use UPPER_SNAKE_CASE.

```js
const MAX_STOCK_LIMIT = 100;
```

---

# Folder Organization

Pages belong inside:

```
src/pages/
```

Reusable UI belongs inside:

```
src/components/
```

Shared styles belong inside:

```
src/style/
```

Application state belongs inside:

```
src/state/
```

Utility functions belong inside:

```
src/utils/
```

---

# Branch Naming

Use:

```
feature/issue-name
```

Examples:

```
feature/login-page
feature/stock-search
feature/buyer-portfolio
```

---

# Commit Messages

Recommended prefixes:

```
feat:
fix:
refactor:
style:
docs:
test:
```

Examples:

```
feat: implement buyer portfolio
fix: correct seller login validation
refactor: simplify router logic
```

---

# Pull Requests

Every Pull Request should:

- Reference the related issue.
- Describe the changes made.
- Be reviewed before merging.

Example:

```
Closes #12
```

---

Future development guidelines will be added as the project grows.