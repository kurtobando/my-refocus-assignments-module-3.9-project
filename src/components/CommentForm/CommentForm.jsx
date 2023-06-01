import "./CommentForm.css";
import Button from "../Button/Button";
import { useState } from "react";

function CommentForm({ onSubmit = (comment) => {} }) {
    const [comment, setComment] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    function onChange(e) {
        setComment(e.target.value);
        setIsButtonDisabled(comment.trim().length === 0);
    }

    function onClick() {
        onSubmit(comment);
        setComment("");
        setIsButtonDisabled(true);
    }

    return (
        <div className='comment-form'>
            <h3>Leave a comment:</h3>
            <textarea cols='30' rows='10' value={comment} onChange={onChange}></textarea>
            <Button disabled={isButtonDisabled} onClick={onClick}>
                Send
            </Button>
        </div>
    );
}

export default CommentForm;
