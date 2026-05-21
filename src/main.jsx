import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const container = document.getElementById('root');
// Clear the crawlable SEO fallback before mounting the app.
container.innerHTML = '';
createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
