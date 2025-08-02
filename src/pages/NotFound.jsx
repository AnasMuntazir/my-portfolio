// NotFound.jsx
import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="error-code">404</div>
      <h2>Oops! The page you’re looking for doesn’t exist.</h2>
      <p>Looks like you took a wrong turn — let’s get you back home.</p>
      <a href="/" className="home-link">🏠 Go to Homepage</a>
    </div>
  );
}

export default NotFound;
