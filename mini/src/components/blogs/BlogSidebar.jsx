import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { usePosts } from '../../context/PostsContext';

function BlogSidebar({ leftSidebarStatus, rightSidebarStatus, postDetails, blogs }) {

    const { recentPosts } = usePosts();
    const navigate = useNavigate();

    let order2 = false;

    if (!leftSidebarStatus && !rightSidebarStatus) {
        return;
    } else if (rightSidebarStatus) {
        order2 = true;
    }

    const handleNavigate = (post) => {
        navigate(`/post/${post.id}`, {
            state: {
                title: post.title
            }
        });
    }

    return (
        <>
            <div className={`col-xl-3 col-lg-4 col-md-5 ${order2 ? 'order-2' : ''}`}>
                {blogs && <aside className="single-widget">
                    <div className="search-widget">
                        <form className="search-form">
                            <input type="text" placeholder="search...." />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                    </div>
                </aside>}
                {postDetails && <aside className="single-widget">
                    <h4 className="widget-title">About author</h4>
                    <div className="widget-content">
                        <div className="author-thumbnail">
                            <img src="/assets/img/avatars/author.jpg" alt="" />
                        </div>
                        <div className="author-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet suscipit voluptatum, quis labore amet laborum sequi nisi, odio ipsum molestias.</p>
                            <ul className="social-menu">
                                <li><a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#" onClick={(e) => e.preventDefault()}><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>}
                <aside className="single-widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul className="post-cat-list">
                        <li><button>design <span>[9]</span></button></li>
                        <li><button>animation <span>[5]</span></button></li>
                        <li><button>game <span>[7]</span></button></li>
                        <li><button>robotics <span>[6]</span></button></li>
                    </ul>
                </aside>
                <aside className="single-widget">
                    <h4 className="widget-title">Tags</h4>
                    <div className="tags">
                        <button>design</button>
                        <button>template</button>
                        <button>theme-forest</button>
                        <button>game</button>
                        <button>art</button>
                        <button>robotics</button>
                    </div>
                </aside>
                <aside className="single-widget">
                    <h4 className="widget-title">Recent Posts</h4>
                    <div className="recent-post-widget">
                        {
                            recentPosts.map((post) => (
                                <div className="single-post-widget" key={post.id}>
                                    <button onClick={() => handleNavigate(post)}>
                                        <img src={post.img} alt="" />
                                    </button>
                                    <div className="post-widget-content">
                                        <h5><button onClick={() => handleNavigate(post)}>{post.title}</button></h5>
                                        <p>Category: <a href='#'>{post.category}</a></p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </aside>
            </div>
        </>
    )
}

export default BlogSidebar