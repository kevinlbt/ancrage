import React from 'react';
import './index.css';
import './style/style.css'
import Home from './pages/Home';
import NavBar from './components/navbar'
import Footer from './components/footer'
import ArticleSolo from './pages/ArticleSolo'
import About from './pages/About'
import ArticlePage from './pages/ArticlePage'
import Contact from './pages/Contact';
import Parcours from './pages/Parcours';
import Entretien from './pages/Entretien';
import Mentions from './pages/Mentions';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ApiDataProvider } from './utils/apiDataProvider';

function App() {
  
  return (
        <React.StrictMode>
        <ApiDataProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apropos' element={<About />} />
                    <Route path='/articles' element={<ArticlePage />} />
                    <Route path='/article/:id' element={<ArticleSolo />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/parcours' element={<Parcours />} />
                    <Route path='/entretien' element={<Entretien />} />
                    <Route path='/mentions' element={<Mentions />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ApiDataProvider>
    </React.StrictMode>
  )
}

export default App
