import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logon from '../pages/logon';
import Register from '../pages/register';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Logon />} />
        <Route exact path="/register" element={<Register />} />
     </Routes>
    </Router>
  )
}