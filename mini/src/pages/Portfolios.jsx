import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

function Portfolios() {
  return (
    <>
        {/* Breadcrumb area start */}
        <Breadcrumbs page="Portfolios" title="Mini's Portfolios" />
        {/* Breadcrumb area end */}

        {/* Page content area start */}
        <section className="content">
            {/* Portfolio section start */}
            <div id="portfolio" className="theme-section portfolio-section gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="area-heading">
                                <h2 className="area-title">My recent works</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portfolio-filter-wrap">
                                <ul className="portfolio-filter">
                                    <li className="active"><a href="#" data-filter="*"> all</a></li>
                                    <li><a href="#" data-filter=".cat1">design</a></li>
                                    <li><a href="#" data-filter=".cat2">app</a></li>
                                    <li><a href="#" data-filter=".cat3">game</a></li>
                                    <li><a href="#" data-filter=".cat4">robotics</a></li>
                                    <li><a href="#" data-filter=".cat5">film</a></li>
                                </ul>
                            </div>
                            <div id="da-thumbs" className="da-thumbs portfolio-grid clearfix">
                                <div className="portfolio-item cat1 cat2">
                                    <img src="img/portfolio/1.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">design</a></li>
                                                <li><a href="#">app</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/1.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat3 cat4">
                                    <img src="img/portfolio/2.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">game</a></li>
                                                <li><a href="#">robotics</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/2.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat5 cat1">
                                    <img src="img/portfolio/3.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">film</a></li>
                                                <li><a href="#">design</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/3.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat2 cat3">
                                    <img src="img/portfolio/4.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">app</a></li>
                                                <li><a href="#">game</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/4.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat4 cat5">
                                    <img src="img/portfolio/5.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">robotics</a></li>
                                                <li><a href="#">film</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/5.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat1 cat2">
                                    <img src="img/portfolio/6.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">design</a></li>
                                                <li><a href="#">app</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/6.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat3 cat4">
                                    <img src="img/portfolio/7.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">game</a></li>
                                                <li><a href="#">robotics</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/7.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat5 cat1">
                                    <img src="img/portfolio/8.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">film</a></li>
                                                <li><a href="#">design</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/8.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat2 cat3">
                                    <img src="img/portfolio/9.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">app</a></li>
                                                <li><a href="#">game</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/9.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat4 cat5 hidden">
                                    <img src="img/portfolio/5.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">robotics</a></li>
                                                <li><a href="#">film</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/5.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat1 cat2 hidden">
                                    <img src="img/portfolio/6.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">design</a></li>
                                                <li><a href="#">app</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/6.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat3 cat4 hidden">
                                    <img src="img/portfolio/7.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4>Portfolio title here.</h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">game</a></li>
                                                <li><a href="#">robotics</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="img/portfolio/7.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-area">
                                <div className="load-more-wrapper text-center">
                                    <a className="button btn-white-left btn-white-bg load-more" href="#">view more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio section end */}
        </section>
        {/* Page content area end */}
    </>
  )
}

export default Portfolios