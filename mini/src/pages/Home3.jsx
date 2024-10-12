import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../components/portfolios/Portfolio';
import Blog from '../components/blogs/Blog'
import PageTitle from '../components/common/PageTitle';


function Home3({ setSlideFull, setColorBg }) {

    const slideFull = useRef(null);

    useEffect(() => {
        if (slideFull.current && slideFull.current.classList.contains('slide-full')) {
            setSlideFull(true);
        }
        if (slideFull.current && slideFull.current.classList.contains('color-bg')) {
            setColorBg(true);
        }

        return () => {
            setSlideFull(false);
            setColorBg(false);
        };
    }, [setSlideFull, setColorBg])

    return (
        <>
            <PageTitle title='Mini | Home 3' />

            {/* Intro area start */}
            <section className="intro-area">
                <div ref={slideFull} className="single-slide color-bg slide-full">
                    <div className="container">

                        <div className="slider-content-wrapper">
                            <div className="slider-content">
                                <p className="greetings">welcome</p>
                                <h1>
                                    we are <span>Mini.</span>
                                </h1>
                                <p>Empowering Your Vision with
                                    Powerful Software Solution.</p>
                                <div className="button-group">
                                    <Link to="/about" className="button">About Us</Link>
                                    <Link to="/contact" className="button btn-style-2">Contact Us</Link>
                                </div>
                            </div>
                            <div className="intro-img">
                                <img src="/assets/img/intro/hero.jpeg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Intro area end */}

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

export default Home3