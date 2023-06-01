import { PostsContext } from "../context/PostContext.js";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import postsData from "../posts.json";
import PostCreate from "../components/PostCreate/PostCreate.jsx";

function PagePostCreate() {
    const post = useLoaderData();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("posts")) {
            localStorage.setItem("posts", JSON.stringify(postsData));
        }
        setPosts(JSON.parse(localStorage.getItem("posts")));
    }, []);

    useEffect(() => {
        if (posts.length) {
            localStorage.setItem("posts", JSON.stringify(posts));
        }
    }, [posts]);

    return (
        <section className='p-1 pt-2 m-auto max-width'>
            <PostsContext.Provider value={{ posts, setPosts }}>
                <PostCreate />
            </PostsContext.Provider>
        </section>
    );
}

export default PagePostCreate;
