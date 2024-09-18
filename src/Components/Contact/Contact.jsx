import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {

    return (
        <div className="flex justify-center my-2 h-full sm:h-[70vh] items-center " id="contact">
            <div className=''>
                <div className="">
                    <div className='grid grid-cols-l md:grid-cols-2 '>
                        <div className=" p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around mb-10">
                            <h1 className="text-2xl md:text-4xl text-white">
                                Contact <span>Me</span>
                            </h1>
                            {/* contact details */ }
                            <p className=" leading-7 font-semibold text-justify text-gray-400 mt-2">
                                Direct contact my number <br /> or send me on Email .
                            </p>
                            {/* phone number */ }
                            <p className="mt-5 md:mt-10 flex gap-5">
                                <i className="text-gray-500 text-lg md:text-xl"><FaPhone /> </i>
                                <span className="text-gray-400">
                                    +880 1580307894
                                </span>
                            </p>
                            {/* Email */ }
                            <p className="mt-5 md:mt-10 flex gap-5 md:tracking-widest">
                                <i className="text-gray-500 text-2xl md:text-3xl "><MdOutlineEmail /> </i>
                                <span className="text-gray-400">
                                    ar.sagor212@gmial.com
                                </span>
                            </p>
                        </div>
                        {/* form */ }
                        <form className="space-y-2 md:space-y-5 w-3/4 mx-auto ">

                            <label className="input  flex items-center gap-2  bg-gray-800 text-white ">
                                <input type="text" className="grow text-xs md:text-sm" placeholder="Full Name" />
                            </label>
                            <label className="flex items-center gap-2 input bg-gray-800 text-white">
                                <input type="text" className="grow text-xs md:text-sm " placeholder="Email" />
                            </label>
                            <label className=" flex items-center gap-2  text-white">
                                <textarea name="" className="grow text-xs md:text-sm bg-gray-800 p-4 " placeholder="Message"></textarea>

                            </label>

                            {/* submit button */ }
                            <button className="btn  md:w-32 lg:w-full font-semibold tracking-wide text-xs md:text-sm bg-primary-color  border-none "> <span className="text-gray-300 hover:scale-110 hover:transition-all">Submit</span></button>

                        </form>
                    </div>

                </div>
            </div>
            {/* whats up logo */ }
            <a href=" https://wa.me/+8801639136200?text=Hi Sagor" target="_blank" className="fixed bottom-6 right-4 z-50  hover:scale-105 hover:transition">
                <i className="text-green-500 text-5xl lg:text-7xl cursor-pointer"><FaWhatsapp /></i>
            </a>
        </div >

    );
};

export default Contact;