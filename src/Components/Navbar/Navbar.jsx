// import { FaHome, FaMusic } from "react-icons/fa";
// import {
//     DiJavascript1,
//     DiReact,
//     DiNodejsSmall,
//     DiHtml5,
//     DiCss3,
//     DiSass,
//     DiBootstrap
// } from 'react-icons/di'
// import { BiLogoMongodb } from "react-icons/bi";



const Navbar = () => {



    /* nav items  */
    const namItem =
        <>
            <li>
                <a>About Me</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <li>
                <a>Skills</a>
            </li>
            <li>
                <a>Work</a>
            </li>
        </>



    return (
        <div className='md:mx-20 '>

            <div className="navbar text-gray-300  max-w-[1920px] mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-2xl  md:text-4xl  md:flex primary-color font-bold  ">AR</a>

                    <div className="navbar-center  lg:hidden">
                        <ul className="menu menu-horizontal px-1">
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
            {/* Skills */ }
            {/* <div>
                <div className="text-5xl p-12 glass w-72">
                    <p className="text-gray-200 text-xl font-bold mb-4 text-center">My Tech Stack</p>
                    <div className="grid grid-cols-4 gap-4">
                        <DiHtml5 className="text-orange-600" />
                        <DiCss3 className="text-blue-600" />
                        <DiSass className="text-pink-600" />
                        <DiBootstrap className="text-purple-600" />
                        <BiLogoMongodb className="text-green-500" />
                        <DiJavascript1 className="text-yellow-500" />
                        <DiReact className="text-blue-500" />
                        <DiNodejsSmall className="text-green-500" />
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default Navbar;