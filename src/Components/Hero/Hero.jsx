
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; /* icon */
import profile from '../../assets/profile.png'
const Hero = () => {
    return (
        <div className='max-w-[1200px] h-[80vh] md:h-auto mx-auto flex  md:flex-row justify-between  md:items-center '>
            <div className="max-w-[300px] md:max-w-[500px] font-bold mt-10 " >

                <div className="ml-4 ">
                    <div className='mb-3  md:w-[550px]'>
                        <h3 className='text-white md:text-3xl'>Assalamu alaikum , i am AR <span className='primary-color'>SAGOR</span></h3>
                    </div>
                    <div className=' primary-color font-bold text-4xl md:text-6xl'>
                        <h1>Frontend Web Developer</h1>
                    </div>

                    <div className='mt-5 '>
                        <h4 className='text-gray-500'>With a good experience
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
                            <i className='md:text-4xl text-purple-600 hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>
                                <FaLinkedin />
                            </i>
                            <i className='md:text-4xl text-purple-600  hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>   <FaFacebook /></i>
                            <i className='md:text-4xl text-purple-600  hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>   <FaGithub /></i>
                            <i className='md:text-4xl text-purple-600  hover:text-white hover:shadow-xl hover:shadow-purple-600 transition duration-300'>   <FaInstagram /></i>
                        </div>
                    </div>
                </div>

            </div>

            <div className='ml-5 ' >
                <img className=' md:max-w-full md:h-full' src={ profile } alt="profile pic" />
            </div>
        </div>
    );
};

export default Hero;