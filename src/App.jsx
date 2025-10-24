import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation ,Navigate } from "react-router-dom";
import  Register  from "./pages/Register";
import Login  from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Canvas from "./pages/Canvas";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </>
  );
}

export default App;
