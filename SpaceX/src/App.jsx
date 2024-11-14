import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import History from './Components/History';
import Company from './Components/CompanyInfo';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/company" element={<Company />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
