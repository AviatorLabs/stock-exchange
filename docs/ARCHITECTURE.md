# Project Architecture

## Overview

The application is built as a modular Single Page Application (SPA) using JavaScript ES Modules and Vite.

Instead of loading a new HTML page for every navigation, the application dynamically renders pages inside a single root element.

---

# Application Flow

```
index.html
    ↓
app.js
    ↓
router.js
    ↓
Page
    ↓
Components
    ↓
Application State
```

---

# app.js

`app.js` is the application's entry point.

Responsibilities include:

- Loading global styles.
- Initializing the router.
- Registering global event listeners.
- Handling browser navigation.
- Starting the application.

When the application loads:

1. Global styles are imported.
2. Event listeners are registered.
3. The router renders the initial page.

---

# router.js

The router controls navigation throughout the application.

Responsibilities include:

- Mapping URLs to pages.
- Rendering pages inside the root container.
- Calling page initialization functions.

Adding a new page requires:

1. Creating the page.
2. Importing it into `router.js`.
3. Registering a new route.

---

# State Management

Application data is managed using a centralized state object.

Examples include:

- Current user
- Stocks
- Buy orders
- Sell orders
- Watch lists

Components should always read from and update the shared state rather than creating duplicate copies of data.

---

# Component Communication

The project follows a one-way data flow.

```
State
 ↓
Page
 ↓
Component
 ↓
User Interaction
 ↓
State Update
 ↓
Re-render
```

Components communicate through shared state instead of directly modifying one another.

---

# Pages

Pages represent complete application views.

Examples include:

- Home
- Login
- Buyer Registration
- Seller Registration
- Dashboard

Pages are responsible for assembling components.

---

# Components

Components are reusable UI building blocks.

Examples:

- Navigation bar
- Dashboard header
- Available stocks
- Portfolio
- Stock holders
- Sell stock form

Components should remain focused on a single responsibility.

---

# Utilities

Shared helper functions belong inside:

```
src/utils/
```

Examples:

- Validation
- Formatting
- Helper functions

---

# Styling

Global styles are stored inside:

```
src/style/
```

Component-specific styles should remain modular whenever possible.

---

# Implementing New Features

When adding a new feature:

1. Create the component or page.
2. Add required styles.
3. Connect the feature to the router if necessary.
4. Update the centralized state.
5. Test functionality.
6. Open a Pull Request referencing the related issue.

Following this workflow keeps the project modular, maintainable, and easy for all contributors to understand.