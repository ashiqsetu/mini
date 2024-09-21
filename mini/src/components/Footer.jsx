import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className="theme-footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-lg-1 col-md-12 order-md-2">
                            <div className="copy-right-info">
                                <p>All rights reserved &copy; <a href="https://themeforest.net/user/oxygens/portfolio" target="_blank">oxygens</a>, 2024</p>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-2 col-md-7 order-md-1">
                            <div className="footer-single-widget">
                                <ul className="quick-link">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/services">services</Link></li>
                                    <li><Link to="/portfolios">portfolios</Link></li>
                                    <li><Link to="/blogs">blogs</Link></li>
                                    <li><Link to="/contact">contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-5 order-md-1">
                            <div className="footer-single-widget">
                                <ul className="social-menu">
                                    <li><a title="facebook" href="#" target='_blank'><i className="fa fa-facebook"></i></a></li>
                                    <li><a title="twitter" href="#" target='_blank'><i className="fa fa-twitter"></i></a></li>
                                    <li><a title="instagram" href="#" target='_blank'><i className="fa fa-instagram"></i></a></li>
                                    <li><a title="linkedin" href="#" target='_blank'><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer