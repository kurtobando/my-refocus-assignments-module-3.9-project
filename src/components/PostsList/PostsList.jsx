import "./PostsList.css";
import Post from "../Post/Post";

function PostsList({ posts }) {
    return <div className='post-list'>{posts && posts.map((post) => <Post key={post.id} post={post} />)}</div>;
}

export default PostsList;
