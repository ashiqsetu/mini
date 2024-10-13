import { createContext, useContext, useState } from "react";
import { blogPosts } from '../data/blog-posts';

export const PostsContext = createContext();

export const PostsProvider = ({children}) => {
    const [recentPosts, setRecentPosts] = useState(blogPosts.slice(0, 3));

    return (
        <PostsContext.Provider value={{ recentPosts, setRecentPosts }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = () => useContext(PostsContext);