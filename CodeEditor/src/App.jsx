import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Editor from "@monaco-editor/react";
import axios from 'axios';
import CodeEditor from "../pages/Editor.jsx";
import Home from "../pages/Home.jsx";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<CodeEditor />} />
      </Routes>
    </div>
  )
}

export default App
