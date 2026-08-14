# Stock Exchange Website

A modular Single Page Application (SPA) that simulates a stock exchange platform. Users can browse available stocks, create and manage stock listings, buy stocks, manage their holdings, and review transaction activity through a responsive buyer and seller dashboard.

The application is built with HTML, CSS, JavaScript, Vite, PHP, and MySQL, with the frontend and backend integrated through HTTP APIs.

---

## Features Implemented

### Core Application

- Single Page Application (SPA)
- Client-side routing
- Modular project architecture
- Component-based UI
- Centralized application state
- Responsive layouts
- Loading states
- Error handling
- Guest market browsing

### Authentication & Sessions

- Buyer registration
- Seller registration
- Buyer login
- Seller login
- Session-based authentication
- Session persistence
- Server-side logout
- Session regeneration during authentication
- Role-aware login handling

### Market & Stock Discovery

- Browse available stocks
- Client-side stock search
- Case-insensitive stock-name search
- Whitespace-tolerant search
- Search from the buyer dashboard
- Search from the guest market
- Search results derived from currently loaded market data
- Stock detail lookup
- Stock detail retrieval from available market/state collections

### Stock Management

- Create stock listings
- View available stocks
- Seller stock management
- Stock image uploads
- Profile picture uploads
- Stock holder information
- Seller dashboard
- Buyer dashboard

### Trading

- Stock purchasing
- Buyer holdings
- Backend transaction recording
- Frontend synchronization after successful purchases
- Updated market availability after purchases

### Portfolio

- Buyer portfolio
- Owned stock display
- Share quantities
- Portfolio information
- Portfolio dashboard

### Transaction History

- Backend-authoritative transaction history
- Transaction retrieval from the existing `transactions` database table
- User-specific transaction retrieval
- Server-side user isolation using the authenticated session
- Centralized transaction state
- Buyer transaction history
- Seller transaction history
- Newest-first transaction ordering
- Loading state
- Error state
- Empty transaction state
- Responsive transaction table
- Transaction history refresh after successful BUY operations

Transaction history is retrieved from the backend rather than being fabricated from frontend state.

### User Experience

- Responsive homepage
- Responsive buyer dashboard
- Responsive seller dashboard
- Responsive guest market
- Mobile-friendly stock search
- Accessible search inputs
- Loading states
- Error states
- Empty states
- Responsive transaction-history table

---

## Current User Roles

### Guest

Guests can:

-  Access the public homepage 
-  Browse the available stock market 
-  Search available stocks 
-  View stock information 

Guests do not have access to authenticated trading functionality.

### Buyer

Buyers can:

-  Register and log in 
-  Browse the market 
-  Search stocks 
-  View stock details 
-  Purchase stocks 
-  View owned holdings 
-  View portfolio information 
-  View transaction history 

### Seller

Sellers can:

-  Register and log in 
-  Access the seller dashboard 
-  Create stock listings 
-  Manage seller stock information 
-  View stock holders 
-  View transaction history

---

## Architecture

The project uses a modular frontend architecture with centralized application state and a PHP/MySQL backend.

### Frontend

```text
stockExchange/
│
├── backend/
│   ├── api/
│   ├── config/
│   └── uploads/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── state/
│   │   ├── style/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── router.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── docs/
│   ├── ARCHITECTURE.md
│   └── DEVELOPMENT-GUIDELINES.md
│
└── README.md
```

## Technology Stack

### Frontend

-  HTML5 
-  CSS3 
-  JavaScript (ES Modules) 
-  Vite 

### Backend

-  PHP 
-  MySQL 
-  PHP Sessions 
-  HTTP API endpoints 

### Development Environment

-  Node.js / npm 
-  XAMPP 
-  Apache 
-  MySQL 
-  Git 
-  GitHub

---

## Team Workflow

Development follows a GitHub workflow based on:

- Issues
- Feature Branches
- Pull Requests
- Code Reviews

Direct commits to the main branch are not permitted.

---

## Contributing

Before contributing, please read:

- docs/ARCHITECTURE.md
- docs/DEVELOPMENT-GUIDELINES.md

---
