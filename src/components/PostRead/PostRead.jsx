import "./PostRead.css";
import { NavLink } from "react-router-dom";
import CommentsList from "../CommentsList/CommentsList";
import CommentForm from "../CommentForm/CommentForm";

function PostRead({ post }) {
    const { title, text, likes, isLiked, image, id, date, author, comments } = post;

    return (
        <article className='post-read'>
            <div className='post-read-image'>
                <img src={image} alt={title} />
            </div>
            <div className='post-read-content'>
                <NavLink to='/' className='post-read-back'>
                    <div className='flex items-center ' style={{ gap: "0.5rem" }}>
                        <img src='/public/assets/icon-right.png' alt='' />
                        <span>Blog</span>
                    </div>
                </NavLink>
                <h2 className='post-read-title'>{title}</h2>
                <div className='post-read-meta'>
                    <span>
                        <img src='/assets/avatar-small.png' alt='' />
                    </span>
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                <p className='post-read-text'>{text}</p>
                <div className='post-read-stats'>
                    <div className='flex items-center'>
                        <img src='/public/assets/icon-chat.png' alt='' />
                        <span>{comments?.length}</span>
                    </div>
                    <div className='flex items-center'>
                        {isLiked ? (
                            <img src='/public/assets/icon-heart-active.png' alt='' />
                        ) : (
                            <img src='/public/assets/icon-heart.png' alt='' />
                        )}
                        <span>{likes}</span>
                    </div>
                </div>
                <CommentForm postId={id} />
                <CommentsList comments={comments} />
            </div>
        </article>
    );
}

export default PostRead;
