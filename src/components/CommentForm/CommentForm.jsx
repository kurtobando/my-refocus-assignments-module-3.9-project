import "./CommentForm.css";
import Button from "../Button/Button";

function CommentForm() {
    return (
        <div className='comment-form'>
            <h3>Leave a comment:</h3>
            <textarea name='' id='' cols='30' rows='10'></textarea>
            <Button>Send</Button>
        </div>
    );
}

export default CommentForm;
