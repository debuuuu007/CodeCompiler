const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const app = express();
app.use(cors(
  {
    origin: '*', // Adjust this to your frontend URL
    methods: ['POST'],
    allowedHeaders: ['Content-Type'],
  }
));
app.use(express.json());

app.post('/run', (req, res) => {
  const { code } = req.body;

  // Write the submitted code to code.py
  const codePath = path.join(__dirname, 'judge', 'code.py');
  fs.writeFileSync(codePath, code);

  // Build Docker image and run the container
  exec(
    'docker build -t code-runner ./judge && docker run --rm code-runner',
    (err, stdout, stderr) => {
      if (err) {
        // Send both error and stderr output
        return res.json({ output: stderr || err.message });
      }
      res.json({ output: stdout });
    }
  );
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
