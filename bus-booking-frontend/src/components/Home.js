import React from 'react';
import BusSearch from './BusSearch';

function Home() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Bus Booking</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/profile">Profile</a>
            <a className="nav-link" href="/history">Booking History</a>
            {localStorage.getItem('token') ? (
              <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <a className="nav-link" href="/login">Login</a>
                <a className="nav-link" href="/register">Register</a>
              </>
            )}
          </div>
        </div>
      </nav>
      <BusSearch />
    </div>
  );
}

export default Home;