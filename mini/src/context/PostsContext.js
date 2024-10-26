import { createContext, useContext, useState, useEffect } from "react";
import { blogPosts } from '../data/blog-posts';

export const PostsContext = createContext();
export const CategoryContext = createContext();

export const PostsProvider = ({ children }) => {
    const [recentPosts, setRecentPosts] = useState(blogPosts.slice(0, 3));

    const [categoryCounts, setCategoryCounts] = useState({});

    useEffect(() => {
        const counts = blogPosts.reduce((acc, post) => {
            acc[post.category] = (acc[post.category] || 0) + 1;
            return acc;
        }, {});
        setCategoryCounts(counts);
    }, []);

    return (
        <PostsContext.Provider value={{ recentPosts, setRecentPosts }}>
            <CategoryContext.Provider value={{ categoryCounts }}>
                {children}
            </CategoryContext.Provider>
        </PostsContext.Provider>
    )
}

export const usePosts = () => useContext(PostsContext);
export const useCategory = () => useContext(CategoryContext);