import React, { Fragment } from 'react'

function Footer() {
  return (
    <>
        <footer className="theme-footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 order-lg-1 col-md-12 order-md-2">
                        <div className="copy-right-info">
                            <p>All rights reserved &copy; <a href="https://themeforest.net/user/oxygens/portfolio" target="_blank">oxygens</a>, 2018</p>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-2 col-md-7 order-md-1">
                        <div className="footer-single-widget">
                            <ul className="quick-link">
                                <li><a href="#">About</a></li>
                                <li><a href="#">service</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">blog</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 order-lg-2 col-md-5 order-md-1">
                        <div className="footer-single-widget">
                            <ul className="social-memu">
                                <li><a title="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a title="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a title="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a title="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
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