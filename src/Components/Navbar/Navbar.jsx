import { useState } from "react";




const Navbar = () => {

    /*  Active link function*/

    const [activeLink, setActiveLink] = useState('#home');

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
    };

    /* nav items  */
    const namItem =
        <>
            <li>
                <a
                    href="#home"
                    className={ `${activeLink === '#home' ? 'text-purple-500' : 'text-white'
                        }` }
                    onClick={ () => handleSetActiveLink('#home') }
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    href="#projects"
                    className={ `${activeLink === '#projects' ? 'text-purple-500' : 'text-white'
                        }` }
                    onClick={ () => handleSetActiveLink('#projects') }
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                    href="#about"
                    className={ `${activeLink === '#about' ? 'text-purple-500' : 'text-white'
                        }` }
                    onClick={ () => handleSetActiveLink('#about') }
                >
                    About Me
                </a>
            </li>
            <li>
                <a
                    href="#contact"
                    className={ `${activeLink === '#contact' ? 'text-purple-500' : 'text-white'
                        }` }
                    onClick={ () => handleSetActiveLink('#contact') }
                >
                    Contact
                </a>
            </li>
        </>



    return (


        <div className='overflow-x-hidden  md:fixed  z-30  w-full '>

            <div className="navbar text-gray-300  max-w-[1920px] mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-2xl  md:text-4xl  md:flex primary-color font-bold ">AR</a>

                    <div className="navbar-center  lg:hidden">
                        <ul className=" text-sm  gap-5 menu-horizontal px-1">
                            { namItem }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex lg:navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        { namItem }
                    </ul>
                </div>

            </div>

        </div>

    );
};

export default Navbar;