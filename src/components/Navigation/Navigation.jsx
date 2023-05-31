import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../Button/Button";


function Navigation() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='nav w-full'>
            <div className='w-full max-width m-auto flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <NavLink to='/'>
                        <img src='/assets/logo.png' alt='logo' />
                    </NavLink>
                    <img
                        className='menu-burger'
                        src='/assets/icon-menu-burger.png'
                        alt='logo'
                        onClick={() => setToggle(!toggle)}
                    />
                </div>
                <div className={toggle ? "flex flex-col gap-1 menu-content" : "hidden menu-content"}>
                    <div className='flex flex-col gap-1 font-medium'>
                        <NavLink className={({ isActive }) => isActive ? "current" : ""} to='/'>
                            Blog
                        </NavLink>
                        <NavLink to='/'>About Us</NavLink>
                        <NavLink to='/'>Reviews</NavLink>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <NavLink to='/' className='sign-up font-bold'>
                            Sign up
                        </NavLink>
                        <NavLink to='/'>
                            <Button theme='outline-rounded'>
                                <span className='font-bold'>Log in</span>
                            </Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
