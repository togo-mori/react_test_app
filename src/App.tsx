import React from 'react';
import './App.css';
import QRCode from 'qrcode.react';
import { Print } from './components/users/Print';
import { Profile } from './components/users/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile />
      </header>
    </div>
  );
}

export default App;
