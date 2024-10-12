import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../components/portfolios/Portfolio';
import Blog from '../components/blogs/Blog'
import Carousel from 'react-bootstrap/Carousel';
import PageTitle from '../components/common/PageTitle';


function Home4({ setSlideFull }) {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const slideFull = useRef(null);

    useEffect(() => {
        if (slideFull.current && slideFull.current.classList.contains('slide-full')) {
            setSlideFull(true);
        }
    }, [setSlideFull])

    return (
        <>

            <PageTitle title='Mini | Home 4' />

            {/* Slider area start */}
            <section className="intro-area">
                <Carousel activeIndex={index} onSelect={handleSelect} fade pause={false}>
                    <Carousel.Item interval={5000}>
                        <div ref={slideFull} className="single-slide slide-1 slide-full">
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
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div ref={slideFull} className="single-slide slide-2 slide-full">
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
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div ref={slideFull} className="single-slide slide-3 slide-full">
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
                    </Carousel.Item>
                </Carousel>
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

export default Home4