import React, { Fragment } from 'react'

function Header() {
  return (
    <>
        {/* Header area start  */}
        <header className="sticky-header header-area header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav id="ss" className="navbar navbar-expand-md navbar-light">
                            <div className="logo">
                                <a className="navbar-brand" href="index.html">mini<span className="dot-color">.</span></a>
                            </div>
                            <div className="menu-bar">
                                <div className="expand-menu-bar">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        {/* Header area end  */}
        {/* Slide menu start */}
        <section className="main-menu-expand">
            <div className="expand-header">
                <div className="close-icon">
                    <i className="bi bi-cross-gap"></i>
                </div>
                <div className="menu-logo">
                    <a className="navbar-brand" href="/">mini<span className="dot-color">.</span></a>
                </div>
            </div>
            <ul className="main-menu">
                <li className='sub-item'><a href='#'>Home</a>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='index-2.html'>Home 2</a></li>
                        <li><a href='index-3.html'>Home 3</a></li>
                        <li><a href='index-4.html'>Home 4</a></li>
                    </ul>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Service</a></li>
                <li className='sub-item'><a href="#">Portfolio</a>
                    <ul>
                        <li><a href='/portfolio'>Portfolio</a> </li>
                        <li><a href='/single-portfolio'>Single Project</a> </li>
                    </ul>
                </li>
                <li className='sub-item'><a href="#">Blog</a>
                    <ul>
                        <li><a href='/blog'>Blog</a> </li>
                        <li><a href='/single-post'>Single Post</a> </li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <ul className="social-memu">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
            <div className="copy-right-info text-center">
                <p>All rights reserved &copy; <a href="https://themeforest.net/user/oxygens/portfolio" target="_blank">oxygens</a>, 2018</p>
            </div>
        </section>
        {/* Slide menu end */}
    </>
  )
}

export default Header