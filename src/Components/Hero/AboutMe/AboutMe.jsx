import person from '../../../assets/about4.jpeg'
const AboutMe = () => {
    return (
        <div className='bg-[#232325] text-white py-10  h-auto'>
            <div className=' flex flex-col-reverse md:flex-row gap-2 justify-center  items-center md:max-w-[1570px] mx-auto  '>
                {/* image  */ }
                <div>
                    <div className='  w-[400px] h-full'>
                        <img className=' object-cover h-[300px] rounded-xl filter grayscale brightness-50'
                            src={ person } alt="profile pic" />
                    </div>
                </div>

                {/* about text  */ }
                <div className='md:w-1/2 ml-5'>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5 '>About<span className='primary-color'>Me</span></h3>
                            <p className='leading-7 text-justify w-11/12 mx-auto'>Hello i am sagor, mainly i am a web developer . also a logo designer . now i am a student of ulab university location Mohammad Pur ,minabazarHello i am sagor, mainly i am a web developer . also a logo designer . now i am a student of ulab university location Mohammad Pur ,minabazar</p>
                        </div>
                    </div>


                    {/* Projects,Year Experience & Happy Clients  section*/ }
                    <div className='flex mt-10 items-center  gap-7 '>
                        {/* projects */ }
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white '>11
                                <span className='primary-color'>+</span>{ " " }
                            </h3>
                            <span className='primary-color'>Projects</span>
                        </div>
                        {/* Experience */ }
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>1
                                <span className='primary-color'> +</span>{ " " }
                            </h3>
                            <span className='primary-color'>Year Experience</span>
                        </div>
                        {/* clients */ }
                        <div className='bg-[#333333]/40 p-5 rounded-lg'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>15
                                <span className='primary-color'> +</span>{ " " }

                            </h3>
                            <span className='primary-color'>Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutMe;