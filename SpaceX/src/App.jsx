import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import History from './Components/History';
import Company from './Components/CompanyInfo';
import Misson from './Components/Misson';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<History />} />
          <Route path="/company" element={<Company />} />
          <Route path="/history" element={<History />} />
          <Route path="/mission" element={<Misson />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
