// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioPage from './pages/profile'; // misal file ini isinya LandingJasa
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        {/* Tambahkan route lain jika perlu */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
