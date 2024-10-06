import React, { useState, useEffect, useRef } from 'react'
import { portfolios } from '../../data/portfolios-items';
import SinglePortfolio from './SinglePortfolio';
import { Link } from 'react-router-dom';

function Portfolio({ showAllBtn }) {

    const [activePortfolios, setActivePortfolios] = useState([]);
    const [newPortfolios, setNewPortfolios] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    const portfolioRefs = useRef([]);

    const projectToShow = showAllBtn ? portfolios.slice(0, 9) : portfolios;

    useEffect(() => {
        setActivePortfolios(projectToShow);
        setNewPortfolios([...new Set(projectToShow.map((portfolio) => portfolio.category))]);

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
        const filterPortfolios = projectToShow.filter((portfolio) => portfolio.category === portfolioItem);
        setActivePortfolios(filterPortfolios);
        setActiveFilter(portfolioItem);
    }

    return (
        <>
            <section id="portfolio" className="theme-section portfolio-section gray-bg">
                <div className="container">
                    <div className="area-heading">
                        <h2 className="area-title">Our recent works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                    </div>
                    <div className="portfolio-content-wrapper">
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
                        <div className="portfolio-grid">
                            {
                                activePortfolios.length > 0
                                    ? activePortfolios.map((portfolio, index) => (
                                        <SinglePortfolio
                                            key={portfolio.id}
                                            index={index}
                                            portfolio={portfolio}
                                            activePortfolios={activePortfolios}
                                            portfolioRefs={portfolioRefs}
                                        />
                                    ))
                                    : <p>No portfolios found</p>
                            }
                        </div>
                        {
                            showAllBtn && <div className="show-all-content"><Link className="button" to="/portfolios">Show All</Link></div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio