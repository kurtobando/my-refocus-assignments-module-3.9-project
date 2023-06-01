import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { PostsContext } from "../pages/Posts";
import PostRead from "../components/PostRead/PostRead";

function Post() {
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
                <PostRead post={post[0]} />
            </PostsContext.Provider>
        </section>
    );
}

async function PostLoader({ params }) {
    let posts = window.localStorage.getItem("posts");
    posts = JSON.parse(posts);
    posts = posts.filter((post) => post.id == params.id);

    return posts;
}

export default Post;
export { PostLoader };
