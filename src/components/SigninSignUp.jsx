import React, { useState } from 'react';

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className={`container ${isSignIn ? '' : 'active'}`}>
      <div className={`form-container sign-up`}>
        <form>
          <h1>Create Account</h1>
          <br />
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`form-container sign-in`}>
        <form>
          <h1>Sign In</h1>
          <br />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            {/* ... your sign-in toggle content ... */}
            <button className="hidden" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            {/* ... your sign-up toggle content ... */}
            <button className="hidden" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
