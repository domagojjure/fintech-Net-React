import React from 'react'
import logo from "./logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

interface Props { }

const Navbar = (props: Props) => {
    //const { isLoggedIn, user, logout } = useAuth();

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>


                    <div className="hidden font-bold lg:flex">
                        <Link to="/search" className='text-black hover:text-blue-800'>
                            Search
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-6 text-back">
                    <div className="hover:text-darkBlue">Welcome, Domagoj</div>
                    <a
                        className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                    >
                        Logout
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar