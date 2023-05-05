import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/style.css'
import Home from './pages/Home';
import NavBar from './components/navbar'
import Footer from './components/footer'
import About from './pages/about'
import ArticlePage from './pages/articlePage'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/apropos' Component={About}/>
            <Route path='/articles' Component={ArticlePage}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
