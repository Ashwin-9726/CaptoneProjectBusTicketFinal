import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/bookings/history', { headers: { Authorization: `Bearer ${token}` } });
        setBookings(response.data);
      } catch (error) {
        navigate('/login');
      }
    };
    fetchBookings();
  }, [navigate]);

  return (
    <div className="container mt-4">
      <h2>Booking History</h2>
      <div className="row">
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Booking ID: {booking.id}</h5>
                  <p className="card-text">
                    Bus: {booking.bus.busNumber}<br />
                    Route: {booking.bus.source} to {booking.bus.destination}<br />
                    Departure: {new Date(booking.bus.departureTime).toLocaleString()}<br />
                    Status: {booking.status}<br />
                    Booked on: {new Date(booking.bookingTime).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookingHistory;