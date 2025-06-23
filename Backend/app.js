const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const app = express();
app.use(cors({
  origin: '*', // Allow all origins for simplicity; adjust as needed
  methods: ['GET', 'POST'], // Allow specific methods
}
));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Code Execution API');
})

app.post('/run', (req, res) => {
  const { code,input } = req.body;

  const codePath = path.join(__dirname, 'judge', 'code.py');
   const inputPath = path.join(__dirname, 'judge', 'input.txt');

  // Write the submitted code to a file
  fs.writeFileSync(codePath, code);
  fs.writeFileSync(inputPath, input || '');

  // Run it using Python (use 'python' for Windows, wrap path in quotes)
  exec(`python "${codePath}" < "${inputPath}"`, (err, stdout, stderr) => {
    if (err) {
      return res.json({ output: stderr ||'Error executing code' });
    }
    res.json({ output: stdout });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
