import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import History from './Components/History';
import Company from './Components/CompanyInfo';
import Ships from './Components/Ships';
import Missons from './Components/Missons';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/mission" element={<Missons />} />
          <Route path="/history" element={<History />} />
          <Route path="/ships" element={<Ships />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
