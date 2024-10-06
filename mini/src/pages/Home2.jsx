import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../components/portfolios/Portfolio';
import Blog from '../components/blogs/Blog'

function Home2() {
    return (
        <>
            {/* Slider area start */}
            <section className="slider-area">
                <div className="single-slide slide-1">
                    <div className="container">
                        <div className="slider-content-wrapper">
                            <div className="slider-content">
                                <p className="greetings">welcome</p>
                                <h1 className="cd-headline">
                                    we are <span>Mini.</span>
                                </h1>
                                <p>Empowering Your Vision with
                                    Powerful Software Solution.</p>
                                <div className="button-group">
                                    <Link to="/about" className="button">About Us</Link>
                                    <Link to="/contact" className="button btn-style-2">Contact Us</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Slider area end */}

            {/* Page content area start */}
            <section className="content">

                {/* Portfolio section start */}
                <Portfolio showAllBtn={true} />
                {/* Portfolio section end */}

                {/* Blog section start */}
                <Blog bgBackground='white-bg' SectionTitle='Latest Posts' pagination={false} showAllBtn={true} />
                {/* Blog section end */}

            </section>
            {/* Page content area end */}
        </>
    )
}

export default Home2