// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ServiceDetail } from "./pages/ServiceDetail"
import { ProdutoDetail } from './pages/ProdutoDetail';
import PrivacyPolicy from './pages/politicaPrivacidade';
// ServiceDetail
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:titulo" element={<ProdutoDetail />} />
        <Route path="/service/:titulo" element={<ServiceDetail />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/* Produtos PoliticaPrivacidade */}
      </Routes>
  );
};

export default App;
