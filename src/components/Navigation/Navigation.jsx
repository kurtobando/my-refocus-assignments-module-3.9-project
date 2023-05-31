import "./Navigation.css";
import { useState } from "react";
import Button from "../Button/Button";

function Navigation() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='nav w-full'>
            <div className='w-full max-width m-auto flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <img src='/assets/logo.png' alt='logo' />
                    <img
                        className='menu-burger'
                        src='/assets/icon-menu-burger.png'
                        alt='logo'
                        onClick={() => setToggle(!toggle)}
                    />
                </div>
                <div className={toggle ? "flex flex-col gap-1 menu-content" : "hidden menu-content"}>
                    <div className='flex flex-col gap-1 font-medium'>
                        <a className='active' href='/'>
                            Blog
                        </a>
                        <a href='/'>About Us</a>
                        <a href='/'>Reviews</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <a href='/' className='sign-up font-bold'>
                            Sign up
                        </a>
                        <a href='/'>
                            <Button theme='outline-rounded'>
                                <span className='font-bold'>Log in</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
