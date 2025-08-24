import React from 'react';
import {useState} from 'react';
import {Link} from "react-router-dom";


const Navbar: React.FC = () => {

    const [menuToggled, setMenuToggled] = useState(false);


    if (!menuToggled) {
        return (

            <div className="flex items-center justify-center bg-black text-[#c1c1c3] p-5 w-full">
                {/* menu button */}
                <div className="w-1/3 flex justify-center">
                    <button onClick={() => setMenuToggled(!menuToggled)} id="navMenuButton"
                            className="border-[#c1c1c3] border-2 p-2">Menu
                    </button>
                </div>


                {/* title */}
                <div className="w-1/3 flex justify-center">
                    <a href={"/"} className="text-2xl text-[#d2d2d2] font-bold">Canvas Website Builder</a>
                </div>

                {/* login button */}
                <div className="w-1/3 flex justify-center ">
                    <Link to={"/login"} className="border-2 border-[#c1c1c3] rounded-xl p-2 hover:bg-yellow-500 hover:border-white hover:text-white">Login</Link>
                </div>


            </div>
        )
    }
    else {
        return (
            <div>
                <div className="flex items-center justify-center bg-black text-[#c1c1c3] p-5 w-full">
                    {/* menu button */}
                    <div className="w-1/3 flex justify-center">
                        <button onClick={() => setMenuToggled(!menuToggled)} id="navMenuButton"
                                className="border-[#c1c1c3] border-2 p-2">Menu
                        </button>
                    </div>


                    {/* title */}
                    <div className="w-1/3 flex justify-center">
                        <a href={"/"} className="text-2xl text-[#d2d2d2] font-bold">Canvas Website Builder</a>
                    </div>

                    {/* login button */}
                    <div className="w-1/3 flex justify-center ">
                        <a className="border-2 border-[#c1c1c3] rounded-xl p-2 hover:bg-yellow-500 hover:border-white hover:text-white">Login</a>
                    </div>


                </div>
                <div className="transition-all duration-300 ease-in-out  flex items-center justify-center bg-black text-[#c1c1c3] p-2 w-full border-y-1 border-gray-600">
                    <Link to={"/sign-up"} className={"w-1/3 flex justify-center"}>Sign Up</Link>
                    <Link to={"/login"} className={"w-1/3 flex justify-center"}>Log In</Link>
                </div>
            </div>
        )
    }
}

export default Navbar