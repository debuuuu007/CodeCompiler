# CodeEdits: Online Code Editor with Python Execution

This project is a web-based code editor that allows users to write and execute Python code in real time. It consists of a React frontend and a Node.js/Express backend that runs user code.

## Folder Structure

```
Codeedits/
├── Backend/
│   ├── app.js
│   ├── package.json
│   └── judge/
│       ├── code.py
│       └── input.txt
└── CodeEditor/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── App.css
    │   └── index.css
    ├── package.json
    ├── vite.config.js
    ├── .env                # (create this file for your backend URL)
    └── .env.production
```

## Features

- Monaco-based code editor with syntax highlighting (frontend)
- "Run Code" button to execute Python code
- Output display for code results or errors
- Backend runs code in a subprocess (using system Python)
- Supports passing input to the code

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/) (should be available as `python` in your PATH)

## Getting Started

### 1. Backend Setup

```bash
cd Backend
npm install
node app.js
```

The backend will listen on port `5000` by default.

### 2. Frontend Setup

```bash
cd ../CodeEditor
npm install
```

#### Configure Environment Variables

- Create a `.env` file in the `CodeEditor` directory.
- Add the following line (adjust the URL if your backend is running elsewhere):

  ```
  VITE_BASE_URL=http://localhost:5000
  ```

- For production, use `.env.production` with the same variable.

#### Start the Frontend

```bash
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

### 3. Usage

- Open the frontend in your browser.
- Write Python code in the editor.
- (Optional) Enter input values in the input box.
- Click "Run Code" to execute and see the output below.

## API Endpoint

- **POST** `/run`
  - **Body:** `{ "code": "<python_code_string>", "input": "<input_string>" }`
    - `input` is optional.
  - **Response:** `{ "output": "<stdout_or_stderr>" }`

## Security Note

- Code execution is performed by writing to files and running a subprocess. **Never expose this service to the public internet without additional security.**
- Only Python is supported by default.

## License

MIT License
