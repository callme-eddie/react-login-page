// LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 style={{border: '1px solid black', padding: '10px'}}>
        <i className="fab fa-facebook-square"></i> Log In
      </h3>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
