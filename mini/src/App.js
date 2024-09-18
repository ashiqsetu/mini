import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import SinglePortfolio from './pages/SinglePortfolio'
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Fragment>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/single-portfolio' element={<SinglePortfolio/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/single-post' element={<SinglePost/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}

export default App