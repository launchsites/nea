import Navbar from '../components/navbar'
import {Link} from "react-router-dom";

export default function Home() {

  return (
    <main className={"bg-black h-screen"}>
    
    <Navbar></Navbar>

        {/* main body */}
        <div className="bg-black text-white p-10">
            <div className="flex justify-center p-5">
                <h1 className={"text-5xl"}>Learn to make websites... without the code</h1>
            </div>
            <div className="flex justify-center p-5">
                <p className={"text-2xl"}>Canvas Website Builder lets you learn how write HTML without ever touching the language.</p>
            </div>

            <div className="flex justify-center p-5">
                <Link to={"/sign-up"} className="border-2 rounded-2xl p-2 hover:bg-yellow-500">Sign Up</Link>
            </div>
        </div>
      
    </main>);

}