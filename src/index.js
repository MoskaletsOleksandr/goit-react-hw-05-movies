import App from 'components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
    // basename="/goit-react-hw-05-movies"
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
