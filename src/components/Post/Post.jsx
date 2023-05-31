import "./Post.css";

function Post({ post }) {
  return (
    <article className="post">
      <img className="post-image" src={post.image} alt={post.title} />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <div className="post-meta">
          <ul>
            <li>{post.date}</li>
            <li>{post.author}</li>
          </ul>
          <ul>
            <li className="flex flex items-center">
              <span className="post-comment-icon"></span>
              <span>{post.comments.length}</span>
            </li>
            <li className="flex items-center">
              {post.isLiked ? (
                <span className="post-like-icon-active"></span>
              ) : (
                <span className="post-like-icon"></span>
              )}
              <span>{post.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Post;
