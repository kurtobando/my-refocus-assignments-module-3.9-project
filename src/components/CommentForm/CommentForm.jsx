import "./CommentForm.css";
import Button from "../Button/Button";
import { useState, useContext } from "react";
import { PostsContext } from "../../pages/Posts";

function CommentForm({ postId }) {
    const { posts, setPosts } = useContext(PostsContext);
    const [comment, setComment] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    function onChange(e) {
        setComment(e.target.value);
        setIsButtonDisabled(comment.trim().length === 0);
    }

    function onSend() {
        setPosts(
            posts.map((post) => {
                if (post.id === postId) {
                    post.comments.push({
                        text: comment,
                        author: "Anoyomous",
                        date: new Date().toLocaleDateString("en-us", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        }),
                        likes: 0,
                        isLiked: false,
                    });
                }
                return post;
            })
        );
        setComment("");
        setIsButtonDisabled(true);
    }

    return (
        <div className='comment-form'>
            <h3>Leave a comment:</h3>
            <textarea cols='30' rows='10' onChange={onChange}></textarea>
            <Button disabled={isButtonDisabled} onClick={onSend}>
                Send
            </Button>
        </div>
    );
}

export default CommentForm;
