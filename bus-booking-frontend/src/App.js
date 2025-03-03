import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import BusSearch from './components/BusSearch';
import BusList from './components/BusList';
import BookingForm from './components/BookingForm';
import UserProfile from './components/UserProfile';
import BookingHistory from './components/BookingHistory';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<BusSearch />} />
        <Route path="/buses" element={<BusList />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </Router>
  );
}

export default App;