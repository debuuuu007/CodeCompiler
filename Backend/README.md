# Backend for CodeEdits: Python Code Runner

This backend service receives Python code from the frontend, runs it securely inside a Docker container, and returns the output.

## How It Works

1. **Receives Code:**  
   The backend exposes a `/run` POST endpoint. The frontend sends Python code to this endpoint.

2. **Writes Code to File:**  
   The backend writes the received code to `judge/code.py`.

3. **Builds Docker Image:**  
   It builds a Docker image (`code-runner`) using the `judge/Dockerfile`. This image copies the latest `code.py` into the container.

4. **Runs Code in Docker:**  
   The backend runs the Docker container, which executes `python code.py` in isolation.

5. **Captures Output:**  
   The backend captures the standard output (or error) from the container and sends it back to the frontend.

## Folder Structure

```
Backend/
├── app.js              # Express server
├── package.json
└── judge/
    ├── Dockerfile      # Dockerfile for running Python code
    └── code.py         # Python code to be executed (overwritten each run)
```

## judge/Dockerfile

- Uses the official Python 3.10 slim image.
- Copies `code.py` into `/app/` in the container.
- Sets `/app` as the working directory.
- Runs `python code.py` when the container starts.

## Running the Backend

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (must be running)

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
  - **Body:** `{ "code": "<python_code_string>" }`
  - **Response:** `{ "output": "<stdout_or_stderr>" }`

## Security Notes

- Code runs inside Docker for isolation, but do **not** expose this service to the public internet without further sandboxing and security.
- Only Python code is supported by default.

## Example Request

```bash
curl -X POST http://localhost:5000/run \
  -H "Content-Type: application/json" \
  -d '{"code": "print(2+2)"}'
```

**Response:**
```json
{ "output": "4\n" }
```
