import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logon from '../pages/logon';
import Register from '../pages/register';
import Profile from '../pages/Profile';
import NewIncident from '../pages/NewIncident';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Logon />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/incidents/new" element={<NewIncident />} />
     </Routes>
    </Router>
  )
}