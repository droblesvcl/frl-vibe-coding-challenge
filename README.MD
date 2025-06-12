# Fundamental Research Lab Coding Challenge

This project is a simple Pictionary game with a [FastAPI](https://fastapi.tiangolo.com/) backend and a [Next.js](https://nextjs.org/) + React frontend.

---

## Live Demo

This see this project working live please visit:

> Render's free tier sleeps projects after 15mis of inactivity so please visit first this link and wait for the service to load and then visit the frontend.

[Backend - Render](https://frl-backend.onrender.com/)

[Frontend - Vercel](https://frl-frontend-chi.vercel.app/)

## Table of Contents

- [Project Structure](#project-structure)
- [Backend](#backend)
  - [Setup](#backend-setup)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Setup](#frontend-setup)
  - [Available Scripts](#available-scripts)
  - [Key Components](#key-components)
- [Testing](#testing)
- [Development](#development)
- [License](#license)

---

## Project Structure

```
backend/
  main.py
frontend/
  app/
  components/
  public/
  ...
```

---

## Backend

A FastAPI server provides a random word for the Pictionary game.

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies (requires Python 3.8+):
   ```sh
   pip install fastapi uvicorn
   ```
3. Run the server:
   ```sh
   uvicorn main:app --reload
   ```
   The API will be available at [http://localhost:8000](http://localhost:8000).

### API Endpoints

- `GET /word`
  Returns a JSON object with a word to draw.
  ```json
  { "word": "sunflower" }
  ```

---

## Frontend

A Next.js app with a React-based Pictionary game UI.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Build for production.
- `npm run start` – Start the production server.
- `npm run lint` – Run ESLint.

### Key Components

- [`components/PictionaryGame.tsx`](frontend/components/PictionaryGame.tsx):
  Main game component. Fetches a word from the backend and provides a canvas for drawing.

- [`app/pictionary/page.tsx`](frontend/app/pictionary/page.tsx):
  Page that renders the Pictionary game.

- [`components/PictionaryGame.test.tsx`](frontend/components/PictionaryGame.test.tsx):
  Unit tests for the Pictionary game component.

---

## Testing

Frontend tests are written using Jest and React Testing Library.
To run tests (after installing dependencies):

```sh
npm test
```

---

## Development

- The frontend expects the backend to be running at `http://localhost:8000`.
- You can modify the backend to provide random words or integrate with a database for more features.

---

## License

This project is for demonstration purposes.