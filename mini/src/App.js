import React, { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'
import About from './pages/About'
import Service from './pages/Service'
import Portfolios from './pages/Portfolios'
import SingleProject from './pages/SingleProject'
import Blogs from './pages/Blogs'
import SinglePost from './pages/SinglePost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {

  const targetRef = useRef(null);
  const [hasSlideFull, setSlideFull] = useState(false);

  return (
    <>
      <BrowserRouter>

        {window.location.pathname === '/' && (
          <Header targetRef={targetRef} mainMenu={false} navBarMenu={true} hasSlideFull={hasSlideFull} />
        )}

        {window.location.pathname === '/index-3' && (
          <Header targetRef={targetRef} mainMenu={true} navBarMenu={false} hasSlideFull={hasSlideFull} />
        )}

        {(window.location.pathname !== '/' && window.location.pathname !== '/index-3') && (
          <Header targetRef={targetRef} mainMenu={true} navBarMenu={true} hasSlideFull={hasSlideFull} />
        )}

        <Routes>
          <Route path='/' element={<Home setSlideFull={setSlideFull}/>} />
          <Route path='/index-2' element={<Home2 setSlideFull={setSlideFull}/>} />
          <Route path='/index-3' element={<Home3 setSlideFull={setSlideFull}/>} />
          <Route path='/index-4' element={<Home4 setSlideFull={setSlideFull}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/portfolios' element={<Portfolios />} />
          <Route path='/project/:id' element={<SingleProject />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/post/:id' element={<SinglePost />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        {/* Adding content for different footer */}
        {window.location.pathname === '/index-4' || window.location.pathname === '/index-3' ? (
          <Footer targetRef={targetRef} footerTop={true} />
        ) : (
          <Footer targetRef={targetRef} footerTop={false} />
        )
        }

      </BrowserRouter>
    </>
  )
}

export default App