import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { portfolios } from '../components/portfolios-items';

function Home() {

    const [activePortfolios, setActivePortfolios] = useState([]);
    const [newPortfolios, setNewPortfolios] = useState([]);

    useEffect(() => {
        setActivePortfolios(portfolios);
        setNewPortfolios([... new Set(portfolios.map((portfolio) => portfolio.category))])
    }, []);

    const portfoliosFilter = (portfolioItem) => {
        const filterPortfolios = portfolios.filter((portfolio) => portfolio.category === portfolioItem);
        setActivePortfolios(filterPortfolios);
    }

  return (
    <>     
        {/* Slider area start */}
        <section className="slider-area">
            <div className="slider-area-wrapper">
                <div className="single-slide slide-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content-wrapper">
                                    <div className="slider-content">
                                        <p className="greetings">welcome</p>
                                        <h1 className="cd-headline letters rotate-3 is-full-width">
                                            <span>we are </span> 
                                            <span className="cd-words-wrapper">
                                                <b className="is-visible">Mini.</b>
                                                <b>Designer.</b>
                                                <b>Developer.</b>
                                            </span>
                                        </h1>
                                        <ul className="social-memu">
                                            <li><a title="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a title="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a title="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a title="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                        <div className="button-group">
                                            <a href="about.html" className="button">About Us</a>
                                            <a href="contact.html" className="button btn-style-2">Contact Us</a>
                                        </div>
                                    </div>
                                    <div className="intro-img">
                                        <img src="/assets/img/slider/intro.jpg" alt="" />
                                    </div>
                                </div>
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
            <section id="portfolio" className="theme-section portfolio-section gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="area-heading">
                                <h2 className="area-title">Our recent works</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portfolio-filter-wrap">
                                <ul className="portfolio-filter">
                                    <li className="active"><button onClick={()=> setActivePortfolios(portfolios)}>all</button></li>
                                    {
                                        newPortfolios.map((filterItem, index) =>
                                            <li key={index}><button onClick={() => portfoliosFilter(filterItem)}>{filterItem}</button></li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div id="da-thumbs" className="da-thumbs portfolio-grid clearfix">
                                {
                                    activePortfolios.map((portfolio) => 
                                    <div className={`portfolio-item ${portfolio.category}`} key={portfolio.id}>
                                        <img src={portfolio.img} alt={portfolio.title}/>
                                        <div className="portfolio-content">
                                            <div className="portfolio-content-inner">
                                                <h4><a href="#">{portfolio.title}</a></h4>
                                                <a className="vendorx-gallery" href={portfolio.img}><i className="bi bi-safety-kit"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Portfolio section end */}

            {/* Blog section start */}
            <section id="blog" className="theme-section white-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="area-heading">
                                <h2 className="area-title">Latest Posts</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <article className="blog-post wow fadeIn" data-wow-delay=".2s">
                                <div className="post-thumbnail">
                                    <a className="thumbnail-images" href="#"><img src="/assets/img/blog/1.jpg" alt=""/></a>
                                </div>
                                <div className="post-content">
                                    <div className="post-content-inner">
                                        <h3><a href="#">full width blog post</a></h3>
                                        <ul className="meta-info">
                                            <li><a href="#"><i className="fa fa-user"></i>admin</a></li>
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2024</a></li>
                                            <li><a href="#"><i className="fa fa-tag"></i>game</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae maiores, quidem cumque!</p>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <a className="read-more" href="#">read more</a>
                                        <a className="like-count" href="#">
                                            <i className="fa fa-heart-o"></i>
                                            <span className="heart-number">18</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <article className="blog-post wow fadeIn" data-wow-delay=".4s">
                                <div className="post-thumbnail">
                                    <a className="thumbnail-images" href="#"><img src="/assets/img/blog/2.jpg" alt=""/></a>
                                </div>
                                <div className="post-content">
                                    <div className="post-content-inner">
                                        <h3><a href="#">full width blog post</a></h3>
                                        <ul className="meta-info">
                                            <li><a href="#"><i className="fa fa-user"></i>admin</a></li>
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2024</a></li>
                                            <li><a href="#"><i className="fa fa-tag"></i>game</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae maiores, quidem cumque!</p>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <a className="read-more" href="#">read more</a>
                                        <a className="like-count" href="#">
                                            <i className="fa fa-heart-o"></i>
                                            <span>18</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 d-md-none d-lg-block">
                            <article className="blog-post wow fadeIn" data-wow-delay=".6s">
                                <div className="post-thumbnail">
                                    <a className="thumbnail-images" href="#"><img src="/assets/img/blog/3.jpg" alt=""/></a>
                                </div>
                                <div className="post-content">
                                    <div className="post-content-inner">
                                        <h3><a href="#">full width blog post</a></h3>
                                        <ul className="meta-info">
                                            <li><a href="#"><i className="fa fa-user"></i>admin</a></li>
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2024</a></li>
                                            <li><a href="#"><i className="fa fa-tag"></i>game</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt eius incidunt repellat molestiae maiores, quidem cumque!</p>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <a className="read-more" href="#">read more</a>
                                        <a className="like-count" href="#">
                                            <i className="fa fa-heart-o"></i>
                                            <span>18</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog section end */}
        </section>
        {/* Page content area end */}
    </>

  )
}

export default Home