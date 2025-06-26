# Backend for CodeEdits: Python Code Runner

This backend service receives Python code and optional input from the frontend, runs it using the system Python interpreter, and returns the output.

## How It Works

1. **Receives Code and Input:**  
   The backend exposes a `/run` POST endpoint. The frontend sends Python code and optional input to this endpoint.

2. **Writes Code and Input to Files:**  
   The backend writes the received code to `judge/code.py` and the input to `judge/input.txt`.

3. **Runs Code Using Python:**  
   The backend executes `python code.py < input.txt` using Node.js's `child_process.exec`.

4. **Captures Output:**  
   The backend captures the standard output (or error) and sends it back to the frontend.

## Folder Structure

```
Backend/
├── app.js              # Express server
├── package.json
└── judge/
    ├── code.py         # Python code to be executed (overwritten each run)
    └── input.txt       # Input for the code (overwritten each run)
```

## Running the Backend

### Prerequisites

- [Node.js](https://nodejs.org/)
- Python (should be available as `python` in your PATH)

### Install Dependencies

```bash
npm install
```

### Start the Backend

```bash
node app.js
```

The backend will listen on port `5000`.

## API Endpoint

- **POST** `/run`
  - **Body:**  
    ```json
    { "code": "<python_code_string>", "input": "<input_string>" }
    ```
    - `input` is optional.
  - **Response:**  
    ```json
    { "output": "<stdout_or_stderr>" }
    ```

## Security Notes

- Code is executed directly on the server. Do **not** expose this service to the public internet without proper sandboxing and security.
- Only Python code is supported by default.

## Example Request

```bash
curl -X POST http://localhost:5000/run \
  -H "Content-Type: application/json" \
  -d '{"code": "print(input())", "input": "Hello"}'
```

**Response:**
```json
{ "output": "Hello\n" }
```
```json
{ "output": "4\n" }
```
