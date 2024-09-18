import React, { Fragment } from 'react'

function Home() {
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
                                            <a href="about.html" className="button btn-white-top btn-white-bg">About Me</a>
                                            <a href="contact.html" className="button btn-white-left btn-white-bg">Contact Me</a>
                                        </div>
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
                                    <img src="/assets/img/portfolio/1.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">design</a></li>
                                                <li><a href="#">app</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/1.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat3 cat4">
                                    <img src="/assets/img/portfolio/2.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">game</a></li>
                                                <li><a href="#">robotics</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/2.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat5 cat1">
                                    <img src="/assets/img/portfolio/3.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">film</a></li>
                                                <li><a href="#">design</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/3.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat2 cat3">
                                    <img src="/assets/img/portfolio/4.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">app</a></li>
                                                <li><a href="#">game</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/4.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat4 cat5">
                                    <img src="/assets/img/portfolio/5.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">robotics</a></li>
                                                <li><a href="#">film</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/5.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat1 cat2">
                                    <img src="/assets/img/portfolio/6.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">design</a></li>
                                                <li><a href="#">app</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/6.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat3 cat4">
                                    <img src="/assets/img/portfolio/7.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">game</a></li>
                                                <li><a href="#">robotics</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/7.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat5 cat1">
                                    <img src="/assets/img/portfolio/8.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">film</a></li>
                                                <li><a href="#">design</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/8.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-item cat2 cat3">
                                    <img src="/assets/img/portfolio/9.jpg" alt=""/>
                                    <div className="portfolio-content">
                                        <div className="portfolio-content-inner">
                                            <h4><a href="#">Portfolio title here.</a></h4>
                                            <ul className="project-cat ">
                                                <li><a href="#">app</a></li>
                                                <li><a href="#">game</a></li>
                                            </ul>
                                            <a className="vendorx-gallery" href="/assets/img/portfolio/9.jpg"><i className="bi bi-safety-kit"></i></a>
                                        </div>
                                    </div>
                                </div>
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
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2018</a></li>
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
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2018</a></li>
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
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2018</a></li>
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