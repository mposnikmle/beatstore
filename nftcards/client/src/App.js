import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import BeatCard from './components/card-component/BeatCard';
import Header from './components/header-component/Header';
import Footer from './components/footer-component/Footer'
import MainPage from './components/pages/mainpage/MainPage.jsx'
import SearchPage from './components/pages/searchpage/SearchPage';
import AboutPage from './components/pages/aboutpage/AboutPage';


function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Routes>
            <Route path='/main' Component={MainPage} />
            <Route path='/search' Component={SearchPage} />
            <Route path='/about' Component={AboutPage} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
