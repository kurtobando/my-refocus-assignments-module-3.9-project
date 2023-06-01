import PostRead from "../components/PostRead/PostRead";
import { useLoaderData } from "react-router-dom";

function Post() {
    const post = useLoaderData();

    return (
        <section className='p-1 pt-2 m-auto max-width'>
            <PostRead post={post[0]} />
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
