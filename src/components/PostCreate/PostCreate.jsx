import "./PostCreate.css";
import { PostImage } from "../PostImage/PostImage.jsx";
import Button from "../Button/Button.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function PostCreate() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");

    function addImageSuccessful(fileURL) {
        setImage(fileURL);
    }

    function onSubmit() {
        if (!title || !text || !image) {
            alert("Please fill out all fields");
            return;
        }

        let posts = JSON.parse(localStorage.getItem("posts"));
        posts.push({
            id: posts.length + 1,
            title: title,
            text: text,
            author: "Anonymous",
            date: new Date().toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
            likes: 0,
            isLiked: 0,
            image: image,
            comments: [],
        });
        localStorage.setItem("posts", JSON.stringify(posts));

        setTitle("");
        setText("");
        setImage("");

        navigate("/");
    }

    return (
        <article className='post-create'>
            <NavLink to='/' className='post-read-back'>
                <div className='flex items-center ' style={{ gap: "0.5rem" }}>
                    <img src='/assets/icon-right.png' alt='' />
                    <span>Blog</span>
                </div>
            </NavLink>
            <h2>New Post</h2>
            <div className='post-create-content'>
                <div>
                    <PostImage addImageSuccessful={addImageSuccessful} />
                </div>
                <div className='post-create-form'>
                    <label htmlFor=''>Add Title*</label>
                    <input
                        type='text'
                        placeholder='Our First Concert in the U.S.!'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor=''>Add text*</label>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        cols='30'
                        rows='10'
                        placeholder="It's official! We're coming to the U.S. for our first-ever concert! We're beyond excited to meet our American fans and show them what we've got. See you soon! 🎉🇺🇸🎤"
                    />
                    <Button onClick={onSubmit}>Post</Button>
                </div>
            </div>
        </article>
    );
}

export default PostCreate;
