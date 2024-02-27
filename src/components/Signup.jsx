import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Unique ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter unique ID"
                value={uniqueId}
                onChange={(e) => setUniqueId(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
