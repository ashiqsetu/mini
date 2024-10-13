import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function SingleBlog({ post }) {

    const navigate = useNavigate();

    const handlePostClick = (post) => {
        navigate(`/post/${post.id}`, {
            state: {
                title: post.title
            }
        });
    };

    return (
        <>
            <article className="blog-post appear" key={post.id}>
                <div className="post-thumbnail">
                    <div className="thumbnail-images" onClick={(e) => {
                        handlePostClick(post);
                    }}>
                        <img src={post.img} alt={post.title} />
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-content-inner">
                        <h3>
                            <button onClick={(e) => {
                                handlePostClick(post);
                            }}>{post.title}</button>
                        </h3>
                        <ul className="meta-info">
                            <li><i className="fa fa-user"></i>{post.author}</li>
                            <li><i className="fa fa-calendar"></i>{post.date}</li>
                            <li><i className="fa fa-tag"></i>{post.category}</li>
                        </ul>
                        <p>{post.description}</p>
                    </div>
                    <div className="post-content-wrapper">
                        <button className="read-more" onClick={(e) => {
                            handlePostClick(post);
                        }}>read more</button>
                        <button className="like-count">
                            <i className="fa fa-heart-o"></i>
                            <span className="heart-number">{post.like}</span>
                        </button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default SingleBlog