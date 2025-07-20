import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';

// Set the base URL for Axios from your environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://lakhani-jewellers.onrender.com/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);