import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Not Facebook</h1>
      <hr style={{ margin: '20px 0' }} />
      <Navigation />
      <LoginForm />
    </div>
  );
}

export default App;

