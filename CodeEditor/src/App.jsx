import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from "@monaco-editor/react";
import axios from 'axios';
function App() {

  const [code, setcode] = useState(null)
  const [output, setoutput] = useState(null)

  const handleRun = async () => {
    try {
      const res = await axios.post("http://localhost:5000/run", {
        code: code,
        language: "python",
      });
      setoutput(res.data.output); // changed from message to output
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };



  return(
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <div>
        <h1 className="text-3xl font-bold">Welcome to the Code Editor</h1>
      </div>
      <div className="flex flex-row w-full mt-4 overflow-hidden ">
        
        <div className='bg-red-500 w-1/3 flex items-center justify-center'>
          {/* Add your content here */}
        </div>
        <div className='p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-300 w-2/3'>
          <Editor
            height="500px"
            width="100%"
            theme="vs-dark"
            language="python"
            onChange={(value) => setcode(value)}
            defaultValue="# Write your code here"
          />
          <input type="button" onClick={handleRun} value="Run Code" className='p-4 bg-green-500' />
        </div>

        
      </div>
      <div className="mt-4 p-5 bg-gray-100 border rounded w-full ">
        <p>Output:</p>
        <pre>{output}</pre>
      </div>
    </div>
  )
}

export default App
