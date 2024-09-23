import React, { useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Portfolios from './pages/Portfolios'
import SinglePortfolio from './pages/SinglePortfolio'
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  const targetRef = useRef(null);

  return (
    <>
      <BrowserRouter>
        <Header targetRef={targetRef}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/portfolios' element={<Portfolios />} />
          <Route path='/single-portfolio' element={<SinglePortfolio />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/single-post' element={<SinglePost />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer targetRef={targetRef}/>
      </BrowserRouter>
    </>
  )
}

export default App