# CodeEdits: Online Code Editor with Python Execution

This project is a simple web-based code editor that allows users to write and execute Python code in real time. It consists of a React frontend and a Node.js/Express backend that runs user code securely inside a Docker container.

## Features

- Monaco-based code editor with syntax highlighting
- "Run Code" button to execute Python code
- Output display for code results or errors
- Backend runs code in Docker for isolation and security

## Project Structure

```
Codeedits/
├── Backend/
│   ├── app.js
│   ├── package.json
│   └── judge/
│       ├── Dockerfile
│       └── code.py
└── CodeEditor/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── App.css
    │   └── index.css
    ├── package.json
    └── vite.config.js
```

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)

## Getting Started

### 1. Backend Setup

```bash
cd Backend
npm install
node app.js
```

Make sure Docker is running on your system.

### 2. Frontend Setup

```bash
cd ../CodeEditor
npm install
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### 3. Usage

- Open the frontend in your browser.
- Write Python code in the editor.
- Click "Run Code" to execute and see the output below.

## Security Note

- Code execution is isolated in Docker, but **never expose this service to the public internet without additional security**.
- Only Python is supported by default.

## License

MIT License
