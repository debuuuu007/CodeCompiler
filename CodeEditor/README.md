# CodeEdits Frontend (React + Vite)

This is the frontend for the CodeEdits platform, built with React, Vite, Tailwind CSS, and Monaco Editor. It allows users to write, run, and test Python code directly from the browser.

## Features

- Modern code editor with syntax highlighting (Monaco Editor)
- Input and output panels for code execution
- Connects to a backend API for running Python code
- Responsive UI with Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- Backend server running (see `../Backend/README.md`)

### Installation

1. **Clone the repository** and navigate to the frontend directory:

   ```bash
   cd CodeEditor
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Create a `.env` file in the root of the `CodeEditor` directory.
   - Add the following line, replacing the URL with your backend server address:

     ```
     VITE_BASE_URL=http://localhost:5000
     ```

   - For production, you can use `.env.production` with the same variable.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Environment Variables

- `VITE_BASE_URL`: The base URL of your backend API (e.g., `http://localhost:5000` or your deployed backend URL).

  Example `.env` file:
  ```
  VITE_BASE_URL=http://localhost:5000
  ```

## Project Structure

```
CodeEditor/
├── components/         # Reusable React components
├── pages/              # Page components (Home, Editor)
├── src/                # Main source files
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .env                # (create this file for your backend URL)
├── package.json
└── vite.config.js
```

## Usage

- Visit the homepage and click "Explore the Editor" to access the code editor.
- Write Python code, provide input if needed, and click "Run Code" to see the output.

## Notes

- Make sure the backend server is running and accessible at the URL specified in your `.env` file.
- Only Python code is supported by default.

---
