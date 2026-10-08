# GitHub Finder

A React single-page app for searching GitHub users and viewing their profiles and latest repositories, using the public GitHub REST API.

I built this to practise React hooks, the Context API and client-side routing.

## Features

- Search GitHub users by name or username
- View a user's profile details on a dedicated page
- See the user's five most recent repositories
- Clear search results with one click
- Alert messages for empty searches and users that are not found
- About page and a custom 404 page

## Tech stack

- **React 17** with functional components and hooks
- **Context API + useReducer** for global state (GitHub data and alerts)
- **React Router** for page navigation
- **Axios** for API requests
- **SweetAlert2** for pop-up messages
- **GitHub REST API** as the data source

## Project structure

```
src/
├── App.js                 # Routes and context providers
├── componets/
│   ├── layout/            # Navbar, Alert
│   ├── pages/             # Home, About, Notfound
│   └── users/             # User profile and search components
└── context/
    ├── github/            # GitHub state, reducer and context
    └── Alert/             # Alert state and context
```

## Getting started

### Requirements

- Node.js and npm

### Installation

```bash
git clone https://github.com/Ufoeze-Prince/Github-Finder.git
cd Github-Finder
npm install
```

### Environment variables

Create a file named `.env.local` in the project root:

```
REACT_APP_GITHUB_CLIENT_ID=your_client_id
REACT_APP_GITHUB_CLIENT_SECRET=your_client_secret
```

You can create these by registering an OAuth app in your GitHub developer settings.

### Run the app

```bash
npm start
```

The app opens at `http://localhost:3000`.

## What I learned

- Managing shared state with the Context API and reducers instead of passing props through many components
- Working with a third-party REST API and handling loading and empty states
- Structuring a React project into layout, page and feature components

## Author

**Ufoeze Prince** — [GitHub](https://github.com/Ufoeze-Prince)
