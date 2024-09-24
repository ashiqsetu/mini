import React, { useState, useMemo } from 'react'
import { blogPosts } from '../components/blog-posts'
import { Link, useNavigate } from 'react-router-dom'

function Blog({ bgBackground, SectionTitle, pagination, showAllBtn }) {

    const postsToShow = pagination ? blogPosts : blogPosts.slice(0, 3);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const totalPages = useMemo(() => Math.ceil(postsToShow.length / postsPerPage), [postsToShow, postsPerPage]);

    const navigate = useNavigate();

    const currentPosts = useMemo(() => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;

        return postsToShow.slice(indexOfFirstPost, indexOfLastPost);
    }, [currentPage, postsPerPage, postsToShow]);


    const handleFirst = () => setCurrentPage(1);
    const handlePrevious = () => setCurrentPage(prev => Math.max(1, prev - 1));
    const handleNext = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));
    const handleLast = () => setCurrentPage(totalPages);

    const getPagination = () => {
        const paginationArray = [];

        paginationArray.push(
            <li key={1} className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
            </li>
        );

        if (currentPage > 3) {
            paginationArray.push(<li key="start-dots" className="page-item disabled"><span className="page-link">...</span></li>);
        }

        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            paginationArray.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(i)}>{i}</button>
                </li>
            );
        }

        if (currentPage < totalPages - 2) {
            paginationArray.push(<li key="end-dots" className="page-item disabled"><span className="page-link">...</span></li>);
        }

        paginationArray.push(
            <li key={totalPages} className={`page-item ${currentPage === totalPages ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
            </li>
        );

        return paginationArray;
    };

    const handlePostClick = (post) => {
        navigate(`/post/${post.id}`, {
            state: {
                title: post.title
            }
        });
    };

    return (
        <>
            <div className={`theme-section ${bgBackground}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="area-heading">
                                <h2 className="area-title">{SectionTitle}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ipsam nobis expedita enim provident ad reprehenderit modi, perspiciatis!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            currentPosts.map((post) => (
                                <div className="col-lg-4 col-md-6 post-grid-item" key={post.id}>
                                    <article className="blog-post appear">
                                        <div className="post-thumbnail">
                                            <a className="thumbnail-images" href={`/post/${post.id}`} onClick={(e) => {
                                                e.preventDefault();
                                                handlePostClick(post);
                                            }}>
                                                <img src={post.img} alt={post.title} />
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-content-inner">
                                                <h3>
                                                    <a href={`/post/${post.id}`} onClick={(e) => {
                                                        e.preventDefault();
                                                        handlePostClick(post);
                                                    }}>{post.title}</a>
                                                </h3>
                                                <ul className="meta-info">
                                                    <li><a href="#"><i className="fa fa-user"></i>{post.author}</a></li>
                                                    <li><a href="#"><i className="fa fa-calendar"></i>{post.author}</a></li>
                                                    <li><a href="#"><i className="fa fa-tag"></i>{post.category}</a></li>
                                                </ul>
                                                <p>{post.description}</p>
                                            </div>
                                            <div className="post-content-wrapper">
                                                <a className="read-more" href={`/post/${post.id}`} onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePostClick(post);
                                                }}>read more</a>
                                                <a className="like-count" href="#">
                                                    <i className="fa fa-heart-o"></i>
                                                    <span className="heart-number">{post.like}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                    {
                        pagination &&
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pagination-area">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => handleFirst()} aria-label="Previous">
                                                    <span aria-hidden="true" className='fa fa-angle-double-left'></span>
                                                </button>
                                            </li>

                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => handlePrevious()} aria-label="Previous">
                                                    <span aria-hidden="true" className='fa fa-angle-left'></span>
                                                </button>
                                            </li>

                                            {getPagination()}

                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => handleNext()} aria-label="Next">
                                                    <span aria-hidden="true" className='fa fa-angle-right'></span>
                                                </button>
                                            </li>

                                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => handleLast()} aria-label="Next">
                                                    <span aria-hidden="true" className='fa fa-angle-double-right'></span>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        showAllBtn &&
                        <div className='show-all-content'>
                            <Link to='/blogs' className='button'>Show All</Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Blog