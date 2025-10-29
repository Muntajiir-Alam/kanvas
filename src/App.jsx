import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation ,Navigate } from "react-router-dom";
import Login  from "./pages/Login";
import Signup  from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Canvas from "./pages/Canvas";
import KanvasChat from "./components/Chat/KanvasChat";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/KanvasChat" element={<KanvasChat />} />
      </Routes>
    </>
  );
}

export default App;
