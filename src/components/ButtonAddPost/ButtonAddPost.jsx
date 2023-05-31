import "./ButtonAddPost.css";
import Button from "../Button/Button";

function ButtonAddPost() {
    return (
        <Button theme='outline-rounded'>
            <div className='flex flex-row items-center button'>
                <img src='/public/assets/icon-add.png' className='block button-icon' alt='plus icon' />
                <span className='button-text'>Add Post</span>
            </div>
        </Button>
    );
}

export default ButtonAddPost;
