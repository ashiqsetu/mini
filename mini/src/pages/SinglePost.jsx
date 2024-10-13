import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import BlogSidebar from '../components/blogs/BlogSidebar';
import PostDetailsContent from '../components/blogs/PostDetailsContent';
import PageTitle from '../components/common/PageTitle';
import { usePosts } from '../context/PostsContext';

function SinglePost() {

    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const location = useLocation();
    const { recentPosts } = usePosts();

    const [post, setPost] = useState(() =>
        location.state || recentPosts.find((p) => p.id === parseInt(id))
    );

    useEffect(() => {
        if (!post) {
            const foundPost = recentPosts.find((p) => p.id === parseInt(id));
            if (foundPost) {
                setPost(foundPost); 
            } else {
                navigate('/blogs');
            }
        }
    }, [id, post, recentPosts, navigate]);

    // Post Sidebar Options
    const sidebars = {
        left: true,
        right: false,
        postDetails: true // Need true for Post details page
    };

    return (
        <>
            {/* Page title */}
            <PageTitle title={`Mini | Single Post`} />

            {/* Breadcrumb area start */}
            <Breadcrumbs page="Single Post" title="Mini's Single Post" />
            {/* Breadcrumb area end */}

            {/* Page content area start */}
            <section className="content">
                {/* Blog section start */}
                <div className="theme-section gray-bg">
                    <div className="container">
                        <div className="row">
                            <BlogSidebar leftSidebarStatus={sidebars.left} rightSidebarStatus={sidebars.right} postDetails={sidebars.postDetails} />
                            <PostDetailsContent post={post} state={state} fullWidth={!sidebars.left && !sidebars.right} />
                        </div>
                    </div>
                </div>
                {/* Blog section end */}
            </section >
            {/* Page content area end */}
        </>
    )
}

export default SinglePost