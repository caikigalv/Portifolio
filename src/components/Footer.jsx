import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


export const Footer = () => {
    return (
        <div>
            <div className="bg-slate-950 w-screen md:h-[110px] flex flex-col justify-center items-center">

                <div className="md:flex justify-center items-center w-full">

                    <div className="flex justify-center ">
                        <p className="text-white text-[10px]">Developed by <span className="text-purple-500">Caiki Carlos &copy;</span> </p>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-white uppercase font-bold text-1xl text-center">Social Media </p>
                        <div className="flex justify-center items-center  gap-8 mt-4 w-[400px]">
                            <a href="https://github.com/caikigalv"><FaGithub className="text-purple-600 text-3xl" title="GitHub" /></a>
                            <a href="https://www.linkedin.com/in/caiki-carlos-43372b284/"><FaLinkedin className="text-purple-600 text-3xl" title="LinkedIn" /></a>
                            <a href="https://www.instagram.com/caikicarlosoficial/"><FaInstagram className="text-purple-600 text-3xl" title="Instagram" /></a>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center gap-2 mt-4">
                            <IoPhonePortraitOutline className="text-purple-600" />
                            <p className="text-white ">+55 (11) 98207-9986</p>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <TfiEmail className="text-purple-600" />
                            <p className="text-white ">caikigalv@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}