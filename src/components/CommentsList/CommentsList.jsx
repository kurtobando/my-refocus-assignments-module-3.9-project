import "./CommentsList.css";
import Button from "../Button/Button";
import Comment from "../Comment/Comment";

function CommentsList({ comments }) {
    if (!comments) {
        return null;
    }

    if (comments.length === 0) {
        return <p>No available comments yet.</p>;
    }

    return (
        <section className='comment-lists'>
            <h3>Comments:</h3>
            <div className='comment-lists-content'>
                {comments.map((comment, i) => (
                    <Comment key={i} comment={comment} id={i} />
                ))}
                <Button theme='outline-rounded'>Show More</Button>
            </div>
            <div></div>
        </section>
    );
}

export default CommentsList;
