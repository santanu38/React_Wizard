import { useState } from 'react'
import Counter from './Components/Counter'
import './App.css'
import UserForm from './Components/UserForm'
import RichTextEditor from './Components/RichTextEditor'
import Login from './Components/Login'
import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard"; 
import PrivateRoute from "./PrivateRoute.jsx";

function App() {

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", width: "100vw", padding: "20px", boxSizing: "border-box", alignItems: "flex-start" }}>
    {/* Left Side: Counter (Fixed Width) */}
    <div style={{ width: "250px", minWidth: "200px", flexShrink: 0 }}>
      <Counter />
    </div>

    {/* Right Side: Rich Text Editor (Takes full width) */}
    <div style={{ flex: 1, minWidth: "300px", marginLeft: "20px" }}>
      <RichTextEditor />
    </div>

    {/* User Form (Now takes full width below both components) */}
    <div style={{ width: "100%", marginTop: "20px" }}>
      <UserForm />
    </div>
  </div>


  <Router>
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />
      
      {/* Private Route */}
      <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  </Router>
    </>
  )
}

export default App
