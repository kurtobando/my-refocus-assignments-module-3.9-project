import "./PostRead.css";
import { NavLink } from "react-router-dom";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";
import { PostsContext } from "../../pages/Posts";
import { useContext, useEffect, useState } from "react";

function PostRead(props) {
    const { posts, setPosts } = useContext(PostsContext);
    const [post, setPost] = useState({});

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
        setPost({
            ...post,
            isLiked: !post.isLiked,
            likes: !post.isLiked ? (post.likes += 1) : (post.likes -= 1),
        });
    }

    useEffect(() => {
        setPost(props.post);
    }, [props.post]);

    return (
        <article className='post-read'>
            <div className='post-read-image'>
                <img src={post.image} alt={post.title} />
            </div>
            <div className='post-read-content'>
                <NavLink to='/' className='post-read-back'>
                    <div className='flex items-center ' style={{ gap: "0.5rem" }}>
                        <img src='/public/assets/icon-right.png' alt='' />
                        <span>Blog</span>
                    </div>
                </NavLink>
                <h2 className='post-read-title'>{post.title}</h2>
                <div className='post-read-meta'>
                    <span>
                        <img src='/assets/avatar-small.png' alt='' />
                    </span>
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                </div>
                <p className='post-read-text'>{post.text}</p>
                <div className='post-read-stats'>
                    <div className='flex items-center'>
                        <img src='/public/assets/icon-chat.png' alt='' />
                        <span>{post.comments?.length}</span>
                    </div>
                    <div className='flex items-center'>
                        {post.isLiked ? (
                            <img onClick={onLiked} src='/public/assets/icon-heart-active.png' alt='' />
                        ) : (
                            <img onClick={onLiked} src='/public/assets/icon-heart.png' alt='' />
                        )}
                        <span>{post.likes}</span>
                    </div>
                </div>
                <CommentForm postId={post.id} />
                <CommentsList comments={post.comments} />
            </div>
        </article>
    );
}

export default PostRead;
