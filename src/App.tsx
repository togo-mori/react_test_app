import React from 'react';
import './App.css';
import QRCode from "qrcode.react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QRCode value="https://google.com" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
