import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchBuses } from '../services/services';

function BusList() {
  const [buses, setBuses] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const source = searchParams.get('source');
  const destination = searchParams.get('destination');

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const data = await searchBuses(source, destination);
        setBuses(data);
      } catch (error) {
        alert('Please login to search buses: ' + (error.response?.data?.message || 'Unknown error'));
        navigate('/login');
      }
    };
    if (source && destination) fetchBuses();
  }, [source, destination, navigate]);

  const handleBook = (busId) => {
    navigate(`/book?busId=${busId}`);
  };

  return (
    <div className="container mt-4">
      <h2>Available Buses from {source} to {destination}</h2>
      <div className="row">
        {buses.map((bus) => (
          <div key={bus.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{bus.busNumber}</h5>
                <p className="card-text">
                  Departure: {new Date(bus.departureTime).toLocaleString()}<br />
                  Seats Available: {bus.availableSeats}<br />
                  Price: ${bus.price}
                </p>
                <button className="btn btn-primary" onClick={() => handleBook(bus.id)} disabled={bus.availableSeats === 0}>
                  {bus.availableSeats > 0 ? 'Book Now' : 'Sold Out'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusList;