import React from 'react'
import Editor from "@monaco-editor/react";
import axios from 'axios';
import { useState } from 'react';

const CodeEditor = () => {
  const [code, setcode] = useState(null)
  const [input, setInput] = useState('');
  const [output, setoutput] = useState(null)

  const handleRun = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/run`, {
        code: code,
        language: "python",
        input: input
      });
      setoutput(res.data.output); // changed from message to output
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <div>
        <h1 className="text-3xl font-bold">Welcome to the Code Editor</h1>
      </div>
      <div className="flex flex-row w-full mt-4 overflow-hidden ">
        <div className='p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-300 w-1/2'>
          <Editor
            height="500px"
            width="100%"
            theme="vs-dark"
            language="python"
            onChange={(value) => setcode(value)}
            defaultValue="# Write your code here"
          />

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter input() values here (use newlines for multiple inputs)"
            rows={5}
            className="w-full mt-4 p-2 rounded bg-black text-white resize-none"
          />

          <input type="button" onClick={handleRun} value="Run Code" className='p-4 bg-green-500' />
        </div>
        <div className="m-4 p-5 bg-gray-100 border border-amber-700 rounded w-1/2">
        <p>Output:</p>
        <pre>{output}</pre>
      </div>


      </div>
      
    </div>
  )
}

export default CodeEditor