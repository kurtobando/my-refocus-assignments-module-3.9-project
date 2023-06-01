import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../context/PostContext.js";
import "./PostCard.css";

function PostCard({ post }) {
    const { posts, setPosts } = useContext(PostsContext);

    function onLiked() {
        setPosts(
            posts.map((item) => {
                if (item.id === post.id) {
                    item.isLiked = !item.isLiked;
                    item.isLiked ? (item.likes += 1) : (item.likes -= 1);
                }
                return item;
            })
        );
    }

    return (
        <article className='post'>
            <Link to={`/post/${post.id}`}>
                <img className='post-image' src={post.image} alt={post.title} />
            </Link>
            <div className='post-content'>
                <Link to={`/post/${post.id}`}>
                    <h2>{post.title}</h2>
                </Link>
                <p>{post.text}</p>
                <div className='post-meta'>
                    <ul>
                        <li>{post.date}</li>
                        <li>{post.author}</li>
                    </ul>
                    <ul>
                        <li className='flex flex items-center'>
                            <span className='post-comment-icon'></span>
                            <span>{post.comments.length}</span>
                        </li>
                        <li className='flex items-center'>
                            {post.isLiked ? (
                                <span className='post-like-icon-active' onClick={onLiked}></span>
                            ) : (
                                <span className='post-like-icon' onClick={onLiked}></span>
                            )}
                            <span>{post.likes}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
}

export default PostCard;
