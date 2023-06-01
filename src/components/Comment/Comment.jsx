import "./Comment.css";

function Comment({ comment }) {
    const { text, author, date, likes, isLiked } = comment;

    return (
        <div className='comment'>
            <div className='comment-avatar-image'>
                <img src='/public/assets/avatar.png' alt='author' />
            </div>
            <div className='comment-content'>
                <h4>{author}</h4>
                <p>{text}</p>
                <div className='comment-meta'>
                    <span>{date}</span>
                    <div className='flex items-center'>
                        {isLiked ? (
                            <img src='/public/assets/icon-heart-active.png' alt='like' />
                        ) : (
                            <img src='/public/assets/icon-heart.png' alt='like' />
                        )}
                        <span>{likes}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
