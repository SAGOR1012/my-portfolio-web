
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; /* icon */
import profile2 from '../../assets/profile 2.jpg'
// import profile2 from '../../assets/WhatsApp Image 2024-09-08 at 20.55.07_7d1dfe2f.jpg'
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,


} from 'react-icons/di'
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Hero = () => {
    return (
        <div className=' max-w-[1200px] h-[90vh] md:h-auto mx-auto flex  items-center   flex-col-reverse  md:flex-row md:justify-around md:px-5  lg:justify-between  ' id='home'>
            <div className="max-w-[300px] md:max-w-[500px]    font-bold mt-20 " >

                <div className=" w-full">
                    <div className='mb-3  md:w-[100%] '>
                        <h3 className='text-gray-200 lg:text-3xl'>Assalamu alaikum , i am AR <span className='primary-color'>SAGOR</span></h3>
                    </div>
                    <div className=' primary-color font-bold text-4xl md:text-6xl'>
                        <h1>Frontend Web Developer</h1>
                    </div>

                    <div className='mt-5 '>
                        <h4 className='text-gray-500 w-full  text-sm h-10 md:text-xl'>With a good experience
                            <span> {/* For animations text (react type animation) */ }
                                <TypeAnimation
                                    sequence={ [
                                        // Same substring at the start will only be typed out once, initially
                                        'Logo Designer',
                                        2500, // wait 1s before replacing "Mice" with "Hamsters"
                                        'MERN Stack Developer',
                                        2500,

                                    ] }
                                    wrapper="span"
                                    speed={ 50 }
                                    repeat={ Infinity }
                                />
                            </span>
                        </h4>

                        {/* social icon */ }
                        <div className='mt-4 flex gap-3'>
                            <i className='md:text-4xl text-purple-600 hover:scale-105 hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>
                                <FaLinkedin />
                            </i>
                            <i className='md:text-4xl text-purple-600  hover:scale-105 hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>   <FaFacebook /></i>
                            <i className='md:text-4xl text-purple-600  hover:scale-105 hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>   <FaGithub /></i>
                            <i className='md:text-4xl text-purple-600  hover:scale-105 hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>   <FaInstagram /></i>
                        </div>

                        {/* cv download */ }
                        <div className="relative inline-flex  group mt-10">
                            <div
                                className="absolute transitiona -all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a href="#" title="Get quote now"
                                className="relative inline-flex items-center justify-center px-2 py-2 md:px-8 md:py-4 md:text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">Download CV
                            </a>
                        </div>

                    </div>
                </div>

            </div>
            {/* Skills */ }
            <div className='hidden  p-5 md:w-96 absolute top-[550px] md:top-[400px] lg:top-[550px] left-[39px] md:left-[200px] lg:left-[350px] xl:left-[700px]' >
                <div className="text-2xl md:text-5xl">
                    <div className="flex gap-2 md:gap-4">
                        <DiHtml5 className="text-orange-600" />
                        <DiCss3 className="text-blue-600" />
                        <DiJavascript1 className="text-yellow-500" />
                        <BiLogoTailwindCss className="text-blue-500" />
                        <BiLogoMongodb className="text-green-500" />
                        <DiReact className="text-blue-500" />
                        <DiNodejsSmall className="text-green-500" />
                        <SiExpress className="text-blue-500" />
                    </div>

                </div>
            </div>

            <div>hello</div>
            <div className="w-56 flex justify-center lg:w-72 rounded-xl overflow-hidden mt-10 outline outline-purple-900 outline-offset-4 shadow-lg shadow-violet-900">
                <img className='w-[100%] h-[100%]' src={ profile2 } />
            </div>

        </div>
    );
};

export default Hero;