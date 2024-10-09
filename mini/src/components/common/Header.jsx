import { useState, useEffect } from "react";
import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Header({ targetRef, hasSlideFull }) {

    const [show, sidebarVisibility] = useState(false);
    const [activeSidebar, setActiveSidebar] = useState(false);
    const [hideSidebar, setHideSidebar] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [isSticky, setSticky] = useState(false);

    const [headerHeight, setHeaderHeight] = useState(0);
    const [headerTransition, setHeaderTransition] = useState(false);

    const location = useLocation();

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

    useEffect(() => {
        sidebarVisibility(false);
        setActiveSubMenu(null);
    }, [location]);

    useEffect(() => {
        if (targetRef.current) {
            let headerHeightSize = targetRef.current.offsetHeight || 0;
            setHeaderHeight(headerHeightSize);
        }
    }, []);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            // if (!ticking) {
            //     window.requestAnimationFrame(() => {

            //         if (window.scrollY === 0) {
            //             setHeaderTransition(false);
            //             setSticky(false);
            //         }
            //         if (window.scrollY > headerHeight * 4) {
            //             setHeaderTransition(true);
            //         }
            //         if (window.scrollY > headerHeight * 5) {
            //             setSticky(true);
            //             setHeaderTransition(false);
            //         }                    

            //         ticking = false;
            //     });

            //     ticking = true;
            // }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerHeight]);


    const toggleSubMenu = (index) => {
        setActiveSubMenu(activeSubMenu === index ? null : index);
    }

    return (
        <>
            {/* Header area start  */}
            <header ref={targetRef} className={`sticky-header header-area ${headerTransition ? 'headerTransition' : ''} ${hasSlideFull ? '' : 'header-bg'} ${isSticky ? 'is_sticky' : ''}`}>
                <div className="header-wrapper">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="logo">
                                <Link to='/' className="navbar-brand">
                                    mini<span className="dot-color">.</span>
                                </Link>
                            </div>
                            <div className="menu-bar">
                                <ul className="main-menu">
                                    <li>
                                        <button>Home</button>
                                        <ul>
                                            <li><Link to="/">Home Style 1</Link></li>
                                            <li><Link to="/index-2">Home Style 2</Link></li>
                                            <li><Link to="/index-3">Home Style 3</Link></li>
                                            <li><Link to="/index-4">Home Style 4</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/about'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/service'>Services</Link>
                                    </li>
                                    <li>
                                        <Link to='/portfolios'>Portfolios</Link>
                                    </li>
                                    <li>
                                        <Link to='/blogs'>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact Us</Link>
                                    </li>
                                </ul>
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
            </header>
            {/* Header area end  */}

            {/* Slide menu start */}
            <section className={`navbar-menu-expand ${show ? 'slide_right' : ''} ${activeSidebar ? 'slide_done' : ''} ${hideSidebar ? 'slide_hide' : ''}`}>
                <div className="expand-header">
                    <div className="menu-logo">
                        <Link className="navbar-brand" href="/">mini<span className="dot-color">.</span></Link>
                    </div>
                    <div className="close-icon" onClick={() => hiddenSidebar()}>
                        <i className="bi bi-cross-gap"></i>
                    </div>
                </div>
                <ul className="navbar-menu">
                    <li className={`sub-item ${activeSubMenu === 1 ? 'open' : ''}`}>
                        <button onClick={() => toggleSubMenu(1)}>Home</button>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/index-2'>Home 2</Link></li>
                            <li><Link to='/index-3'>Home 3</Link></li>
                            <li><Link to='/index-4'>Home 4</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Service</Link></li>
                    <li>
                        <Link to='/portfolios'>Portfolios</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <ul className="social-menu">
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} target='_blank'><i className="fa fa-linkedin"></i></a></li>
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