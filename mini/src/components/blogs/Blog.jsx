import React, { useState, useMemo, useEffect } from 'react'
import { blogPosts } from '../../data/blog-posts'
import { Link, useNavigate } from 'react-router-dom'
import BlogSidebar from './BlogSidebar';
import SingleBlog from './SingleBlog';

function Blog({ bgBackground, SectionTitle, pagination, showAllBtn }) {

    const slicePosts = blogPosts.slice(0, 3);

    const postsToShow = pagination ? blogPosts : slicePosts;

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const totalPages = useMemo(() => Math.ceil(postsToShow.length / postsPerPage), [postsToShow, postsPerPage]);

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


    // Post Sidebar Options
    const sidebars = {
        left: false,
        right: false,
        blogs: true // Need true for Blogs page for showing search widget
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
                        <BlogSidebar leftSidebarStatus={sidebars.left} rightSidebarStatus={sidebars.right} blogs={sidebars.blogs} />
                        <div className={sidebars.left || sidebars.right ? 'col-xl-9 col-lg-8' : 'col-md-12'}>
                            <div className={`blog-grid-item ${sidebars.left || sidebars.right ? 'two-column' : ''}`}>
                                {
                                    currentPosts.map((post) => (
                                        <SingleBlog post={post} key={post.id} />
                                    ))
                                }
                            </div>
                            {
                                pagination &&
                                <div className="col-md-12">
                                    <div className="pagination-area blog-pagination">
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
                            }
                            {
                                showAllBtn &&
                                <div className='show-all-content'>
                                    <Link to='/blogs' className='button'>Show All</Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog