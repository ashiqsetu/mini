import { useState, useEffect } from "react";
import React, { Fragment } from 'react'

function Header() {

    const [show, sidebarVisibility] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState(false);
    const [hideSidebar, setHideSidebar] = useState(false);

    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const showSidebar = () => {
        sidebarVisibility(true);
        setTimeout(() => {
            setActiveSidebar(true);
        }, 700)
    }
    const hiddenSidebar = () => {
        setActiveSidebar(false);
        setTimeout(() => {
            setHideSidebar(true);
        }, 1000)
        setTimeout(() => {
            setHideSidebar(false);
            sidebarVisibility(false);
        }, 2000)
    }

    const toggleSubMenu = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    }

  return (
    <>
        {/* Header area start  */}
        <header className="sticky-header header-area header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav id="ss" className="navbar navbar-expand-md navbar-light">
                            <div className="logo">
                                <a className="navbar-brand" href="/">mini<span className="dot-color">.</span></a>
                            </div>
                            <div className="menu-bar">
                                <div className="expand-menu-bar" onClick={() => showSidebar()}>
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
        <section className={`main-menu-expand ${show ? 'slide_right' : ''} ${activeSidebar ? 'slide_done' : ''} ${hideSidebar ? 'slide_hide' : ''}`}>
            <div className="expand-header">
                <div className="menu-logo">
                    <a className="navbar-brand" href="/">mini<span className="dot-color">.</span></a>
                </div>
                <div className="close-icon" onClick={() => hiddenSidebar()}>
                    <i className="bi bi-cross-gap"></i>
                </div>
            </div>
            <ul className="main-menu">
                <li className={`sub-item ${activeSubMenu === 1 ? 'open' : ''}`}>
                    <a href='#' onClick={() => toggleSubMenu(1)}>Home</a>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='index-2.html'>Home 2</a></li>
                        <li><a href='index-3.html'>Home 3</a></li>
                        <li><a href='index-4.html'>Home 4</a></li>
                    </ul>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/service">Service</a></li>
                <li className={`sub-item ${activeSubMenu === 2 ? 'open' : ''}`}>
                    <a href="#" onClick={() => toggleSubMenu(2)}>Portfolio</a>
                    <ul>
                        <li><a href='/portfolio'>Portfolio</a> </li>
                        <li><a href='/single-portfolio'>Single Project</a> </li>
                    </ul>
                </li>
                <li className={`sub-item ${activeSubMenu === 3 ? 'open' : ''}`}>
                    <a href="#" onClick={() => toggleSubMenu(3)}>Blog</a>
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