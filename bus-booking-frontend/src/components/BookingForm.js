import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { createPassenger, createBooking } from '../services/services';

function BookingForm() {
  const [passenger, setPassenger] = useState({ name: '', email: '', phone: '', seatPreference: '' });
  const [searchParams] = useSearchParams();
  const busId = searchParams.get('busId');
  const navigate = useNavigate();
  const [bookingId, setBookingId] = useState(null);

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const passengerData = await createPassenger(passenger);
      const bookingData = await createBooking(busId, passengerData.id);
      setBookingId(bookingData.id);
      alert('Booking successful!');
    } catch (error) {
      alert('Booking failed: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Book Your Ticket</h2>
      {!bookingId ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3"><input type="text" className="form-control" name="name" value={passenger.name} onChange={handleChange} placeholder="Full Name" required /></div>
          <div className="mb-3"><input type="email" className="form-control" name="email" value={passenger.email} onChange={handleChange} placeholder="Email" required /></div>
          <div className="mb-3"><input type="tel" className="form-control" name="phone" value={passenger.phone} onChange={handleChange} placeholder="Phone Number" required /></div>
          <div className="mb-3"><input type="text" className="form-control" name="seatPreference" value={passenger.seatPreference} onChange={handleChange} placeholder="Seat Preference (e.g., Window)" /></div>
          <button type="submit" className="btn btn-success">Confirm Booking</button>
        </form>
      ) : (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Booking Confirmed!</h3>
            <p className="card-text">Your booking ID is: <strong>{bookingId}</strong><br />Please save this ID for reference.<br />An e-ticket has been sent to your email.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;