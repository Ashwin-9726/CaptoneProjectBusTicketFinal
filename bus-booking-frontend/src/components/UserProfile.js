import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/users/profile', { headers: { Authorization: `Bearer ${token}` } });
        setUser(response.data);
      } catch (error) {
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:8080/api/users/profile', user, { headers: { Authorization: `Bearer ${token}` } });
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Update failed!');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:8080/api/users/change-password', { newPassword }, { headers: { Authorization: `Bearer ${token}` } });
      alert('Password changed successfully!');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      alert('Password change failed!');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Personal Information</h4>
          <form onSubmit={handleUpdate}>
            <div className="mb-3"><label className="form-label">Name</label><input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} /></div>
            <div className="mb-3"><label className="form-label">Email</label><input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} disabled /></div>
            <button type="submit" className="btn btn-primary">Update Profile</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Change Password</h4>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-3"><label className="form-label">New Password</label><input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required /></div>
            <div className="mb-3"><label className="form-label">Confirm New Password</label><input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required /></div>
            <button type="submit" className="btn btn-primary">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;