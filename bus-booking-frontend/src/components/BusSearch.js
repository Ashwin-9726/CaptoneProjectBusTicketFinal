import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BusSearch() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (source && destination) {
      navigate(`/buses?source=${source}&destination=${destination}`);
    } else {
      alert('Please enter both source and destination');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Find Your Bus</h2>
      <form onSubmit={handleSearch}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" value={source} onChange={(e) => setSource(e.target.value)} placeholder="From" required />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="To" required />
          </div>
          <div className="col-md-4 mb-3">
            <button type="submit" className="btn btn-primary w-100">Search Buses</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BusSearch;