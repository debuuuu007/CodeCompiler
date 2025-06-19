const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/run', (req, res) => {
  const { code } = req.body;

  const codePath = path.join(__dirname, 'judge', 'code.py');

  // Write the submitted code to a file
  fs.writeFileSync(codePath, code);

  // Run it using Python (no Docker)
  exec(`python3 ${codePath}`, (err, stdout, stderr) => {
    if (err) {
      return res.json({ error: stderr || err.message });
    }
    res.json({ output: stdout });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
