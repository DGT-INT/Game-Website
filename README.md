# DGT-International GameHub

GameHub is a responsive game discovery web application built with React, TypeScript, and Chakra UI. The application allows users to browse, filter, sort, and search for games using data from the FreeToGame API.

## Live Demo

[View the Live Application](https://dgtinternationalgamehub.netlify.app)

## Features

- Browse games retrieved dynamically from the FreeToGame API
- Filter games by genre
- Filter games by platform
- Sort games by name, release date, and relevance
- Search games by title
- Responsive layout for different screen sizes
- Loading skeletons while game data is being retrieved
- Error handling for API requests
- Dynamic game cards with game images and platform icons
- Reusable React components and custom hooks

## Tech Stack

- React
- TypeScript
- Chakra UI
- Axios
- Vite
- FreeToGame REST API
- Netlify

## About the Project

I built GameHub while expanding my experience with React and TypeScript. The application uses a component-based architecture and custom hooks to retrieve and manage game data from a third-party REST API.

This project gave me hands-on experience working with API integration, React state management, reusable components, custom hooks, TypeScript types and interfaces, responsive design, filtering, sorting, and client-side search functionality.

## Project Structure

```text
src/
├── components/
├── hooks/
├── services/
├── App.tsx
└── main.tsx
```

- `components/` contains reusable user interface components such as game cards, filters, selectors, navigation, and loading skeletons.
- `hooks/` contains custom React hooks used to retrieve and process game, genre, and platform data.
- `services/` contains the Axios configuration used to communicate with the FreeToGame API.
- `App.tsx` manages the primary application layout and game query state.

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/DGT-INT/Game-Website.git
```

Navigate to the project directory:

```bash
cd game-hub
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## API

Game data is provided by the FreeToGame API.

The application retrieves game information including:

- Game titles
- Images
- Genres
- Platforms
- Release information

API query parameters are used for supported genre, platform, and sorting filters. Additional client-side logic is used where necessary to adapt the API data to the application's interface.

## Future Improvements

Possible future improvements include:

- Dedicated game detail pages
- Favorites or watchlist functionality
- Additional filters
- Pagination
- Improved search capabilities
- User authentication
- Additional responsive design improvements

## Author

**Daniel Tshiani**

[Portfolio](https://dgt-international.com) | [GitHub](https://github.com/DGT-INT)
