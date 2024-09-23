import React, { useState, useEffect, useRef } from 'react'
import { portfolios } from '../components/portfolios-items'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from 'react-router-dom'

function Portfolio() {

    const [activePortfolios, setActivePortfolios] = useState([]);
    const [newPortfolios, setNewPortfolios] = useState([]);

    const [activeFilter, setActiveFilter] = useState('all');

    const [galleryImages, setGalleryImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const portfolioRefs = useRef([]);

    useEffect(() => {
        setActivePortfolios(portfolios);
        setNewPortfolios([... new Set(portfolios.map((portfolio) => portfolio.category))]);

        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            portfolioRefs.current.forEach((single) => {
                if (!single) return;

                const rect = single.getBoundingClientRect();
                const pX = rect.left;
                const pY = rect.top;

                const distanceX = mouseX - pX;
                const distanceY = mouseY - pY;

                single.style.setProperty('--x', `${distanceX}px`);
                single.style.setProperty('--y', `${distanceY}px`);
            });
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const portfoliosFilter = (portfolioItem) => {
        const filterPortfolios = portfolios.filter((portfolio) => portfolio.category === portfolioItem);
        setActivePortfolios(filterPortfolios);
        setActiveFilter(portfolioItem);
    }

    const openGallery = (index) => {
        const images = activePortfolios.map((portfolio) => ({
            original: portfolio.img,
            thumbnail: portfolio.img,
            description: portfolio.title,
        }));

        setGalleryImages(images);
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
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
                                    <li className={activeFilter === 'all' ? 'active' : ''}>
                                        <button type='button' onClick={() => {
                                            setActivePortfolios(portfolios);
                                            setActiveFilter('all');
                                        }}>all</button>
                                    </li>
                                    {
                                        newPortfolios.map((filterItem, index) =>
                                            <li className={activeFilter === filterItem ? 'active' : ''} key={index}><button type='button' onClick={() => portfoliosFilter(filterItem)}>{filterItem}</button></li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="portfolio-grid clearfix">
                                {
                                    activePortfolios.map((portfolio, index) =>
                                        <div className={`portfolio-item ${portfolio.category} appear`} key={portfolio.id}>
                                            <div className='portfolio-wrap' ref={el => portfolioRefs.current[index] = el}>
                                                <div className='portfolio-img' onClick={() => openGallery(index)}>
                                                    {/* <div className='portfolio-img'> */}
                                                    <img src={portfolio.img} alt={portfolio.title} loading="lazy" />
                                                </div>
                                                <div className="portfolio-content">
                                                    <h4><Link to="/portfolios">{portfolio.title}</Link></h4>
                                                    <p>{portfolio.category}</p>
                                                    <div className="portfolio-action-btns">
                                                        <span onClick={() => openGallery(index)} className='single-action-btn'><i className="bi bi-plus"></i></span>
                                                        <a href='#' target='_blank' className='single-action-btn'><i className="bi bi-link"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}><i className='bi bi-cross'></i></button>
                        <ImageGallery
                            items={galleryImages}
                            startIndex={currentIndex}
                            showThumbnails={true}
                            onSlide={(index) => setCurrentIndex(index)}
                            showFullscreenButton={true}
                            showPlayButton={true}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Portfolio