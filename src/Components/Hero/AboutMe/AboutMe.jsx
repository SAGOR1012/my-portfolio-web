
import profile2 from '../../../assets/profile 2.jpg'
// import person5 from '../../../assets/WhatsApp Image 2024-09-08 at 20.55.07_7d1dfe2f.jpg'

const AboutMe = () => {
    return (
        <div className='bg-[#232325] text-white py-10  h-auto ' id='about '>



            <div className=' flex flex-col-reverse md:flex-row justify-center  items-center md:max-w-[1570px] mx-auto  '>

                {/* image  */ }
                <div className=''>
                    <div className='  w-auto md:w-[300px] lg:w-[400px]  h-full'>
                        <img className=' object-cover px-2 w-[400px] h-[300px] rounded-xl  filter grayscale brightness-50'
                            src={ profile2 } alt="profile pic" />
                    </div>
                </div>

                {/* about text  */ }
                <div className='md:w-1/2 mx-3  lg:mx-5'>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5 '>About<span className='primary-text'>Me</span></h3>
                            <p className='leading-7 text-justify w-11/12 mx-auto'>"Hello! My name is AR Sagor and I'm a <span>frontend </span>web developer currently studying for my Bachelor of Science in Engineering. I'm passionate about creating visually appealing and user-friendly web experiences. As a student, I'm continuously learning and eager to apply my knowledge in real-world projects. I'm excited to contribute my skills in HTML, CSS, JavaScript,react and modern frontend frameworks (tailwind css and bootstrap) to build engaging and responsive websites. I'm looking forward to collaborating and growing in this field!" </p>
                        </div>
                    </div>


                    {/* Projects,Year Experience & Happy Clients  section*/ }
                    <div className='flex mt-10 mb-5 items-center gap-4 lg:gap-7 '>
                        {/* projects */ }
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-2xl md:text-4xl font-bold text-white '>9
                                <span className='primary-text'> +</span>{ " " }
                            </h3>
                            <span className='primary-text '>Projects</span>
                        </div>
                        {/* Experience */ }
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>1
                                <span className='primary-text'> +</span>{ " " }
                            </h3>
                            <span className='primary-text'>Year Experience</span>
                        </div>
                        {/* clients */ }
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>8
                                <span className='primary-text'> +</span>{ " " }

                            </h3>
                            <span className='primary-text'>Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutMe;