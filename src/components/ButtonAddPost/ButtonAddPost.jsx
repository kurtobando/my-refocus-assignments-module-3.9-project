import "./ButtonAddPost.css";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

function ButtonAddPost() {
    return (
        <NavLink to='/post/create'>
            <Button theme='outline-rounded'>
                <div className='flex flex-row items-center button'>
                    <img src='/assets/icon-add.png' className='block button-icon' alt='plus icon' />
                    <span className='button-text'>Add Post</span>
                </div>
            </Button>
        </NavLink>
    );
}

export default ButtonAddPost;
