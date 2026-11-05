import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/users?page=1" replace />} />
        <Route path="/users" element={<Users />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;