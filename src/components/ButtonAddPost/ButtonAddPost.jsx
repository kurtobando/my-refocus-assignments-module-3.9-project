import "./ButtonAddPost.css";

function ButtonAddPost() {
    return (
        <div className='flex flex-row items-center button'>
            <img src='/public/assets/icon-add.png' className='block button-icon'  alt="plus icon"/>
            <span className='button-text'>Add Post</span>
        </div>
    );
}

export default ButtonAddPost;
