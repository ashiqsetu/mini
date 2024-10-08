import React, { useState, useEffect, useRef } from 'react'
import { portfolios } from '../../data/portfolios-items';
import SinglePortfolio from './SinglePortfolio';
import { Link } from 'react-router-dom';

function Portfolio({ showAllBtn }) {

    const [activePortfolios, setActivePortfolios] = useState([]);
    const [newPortfolios, setNewPortfolios] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    const [visibleItemsCount, setVisibleItemsCount] = useState(9);

    const portfolioRefs = useRef([]);

    let projectToShow = portfolios.slice(0, visibleItemsCount);

    useEffect(() => {

        projectToShow = portfolios.slice(0, visibleItemsCount);

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
    }, [visibleItemsCount]);

    const portfoliosFilter = (portfolioItem) => {
        if (!projectToShow) return;
        const filterPortfolios = projectToShow.filter((portfolio) => portfolio.category === portfolioItem);
        setActivePortfolios(filterPortfolios);
        setActiveFilter(portfolioItem);
    }

    const showMoreItems = () => {
        let newCount = visibleItemsCount + 3;
        // setVisibleItemsCount(newCount <= portfolios.length + 2 ? newCount : projectToShow.length);
        setVisibleItemsCount(newCount);
    };

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
                                            if(projectToShow) {
                                                setActivePortfolios(projectToShow);
                                            }
                                            setActiveFilter('all');
                                        }}>all
                                    </button>
                                </li>
                                {
                                    newPortfolios.map((filterItem, index) =>
                                        <li className={activeFilter === filterItem ? 'active' : ''} key={index}>
                                            <button type='button' onClick={() => portfoliosFilter(filterItem)}>{filterItem}</button>
                                        </li>
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
                                            totalPortfolios={portfolios.length}
                                        />
                                    ))
                                    : <p>No portfolios found</p>
                            }
                        </div>
                        {
                            showAllBtn && <div className="show-all-content"><Link className="button" to="/portfolios">Show All</Link></div>
                        }
                        {!showAllBtn && portfolios.length > visibleItemsCount && (
                            <div className="show-all-content">
                                <button className="button" onClick={showMoreItems}>Show More</button>
                            </div>
                        )}
                        {!showAllBtn && portfolios.length <= visibleItemsCount && (
                            <div className="show-all-content">
                                <p>No more items to show</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio