import project1 from '../../assets/proj1.png'
import project3 from '../../assets/proj3.png'
import project4 from '../../assets/proj4.png'
import project5 from '../../assets/proj5.png'
import project6 from '../../assets/proj6.png'
const MyProjects = () => {
    return (
        <div className="py-5 max-w-[1200px] mx-auto flex items-center " id='projects'>
            <div className="mx-5 md:mx-10  overflow-hidden ">
                <div className="mb-4 flex items-center justify-between gap-8 ">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white">
                            My<span>Projects</span>
                        </h2>
                        <p className="text-gray-500">
                            This are my latest projects for different clients.
                        </p>
                    </div>

                </div>
                <div className=' flex justify-center '>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  md:gap-y-5 '>
                        <div className="card card-compact w-full lg:w-auto shadow-xl">
                            <figure>
                                <img className='rounded-lg'
                                    src={ project1 }
                                    alt="project img" />
                            </figure>

                        </div>
                        <div className="card card-compact w-full lg:w-auto shadow-xl">
                            <figure>
                                <img className='rounded-lg'
                                    src={ project3 }
                                    alt="project img" />
                            </figure>

                        </div>
                        <div className="card card-compact w-full lg:w-auto shadow-xl">
                            <figure>
                                <img className='rounded-lg'
                                    src={ project6 }
                                    alt="project img" />
                            </figure>

                        </div>
                        <div className="card card-compact w-full lg:w-auto shadow-xl">
                            <figure>
                                <img className='rounded-lg'
                                    src={ project4 }
                                    alt="project img" />
                            </figure>

                        </div>
                        <div className="card card-compact w-full lg:w-auto shadow-xl">
                            <figure>
                                <img className='rounded-lg'
                                    src={ project1 }
                                    alt="project img" />
                            </figure>

                        </div>
                        <div className="card card-compact w-full lg:w-auto shadow-xl">
                            <figure>
                                <img className='rounded-lg'
                                    src={ project5 }
                                    alt="project img" />
                            </figure>

                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default MyProjects;