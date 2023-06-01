import "./Comment.css";
import { PostsContext } from "../../pages/Posts";
import { useContext, useEffect, useState } from "react";

function Comment(props) {
    const { posts, setPosts } = useContext(PostsContext);
    const [comment, setComment] = useState({});

    function onLikeComment() {
        setPosts(
            posts.map((item) => {
                item.comments.map((comment, i) => {
                    if (i === props.id) {
                        comment.isLiked = !comment.isLiked;
                        comment.isLiked ? (comment.likes += 1) : (comment.likes -= 1);
                    }
                    return comment;
                });
                return item;
            })
        );
        setComment({
            ...comment,
            isLiked: !comment.isLiked,
            likes: !comment.isLiked ? (comment.likes += 1) : (comment.likes -= 1),
        });
    }

    useEffect(() => {
        setComment(props.comment);
    }, [props.comment]);

    return (
        <div className='comment'>
            <div className='comment-avatar-image'>
                <img src='/assets/avatar.png' alt='author' />
            </div>
            <div className='comment-content'>
                <h4>{comment.author}</h4>
                <p>{comment.text}</p>
                <div className='comment-meta'>
                    <span>{comment.date}</span>
                    <div className='flex items-center'>
                        {comment.isLiked ? (
                            <img onClick={onLikeComment} src='/public/assets/icon-heart-active.png' alt='like' />
                        ) : (
                            <img onClick={onLikeComment} src='/public/assets/icon-heart.png' alt='like' />
                        )}
                        <span>{comment.likes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
