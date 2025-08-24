import React from 'react';
import {useState} from 'react';
//import {Link} from "react-router-dom";


const Builder: React.FC = () => {

    const [menuToggled, setMenuToggled] = useState(false);

    //window toggles
    const [canvasOpen, setCanvasOpen] = useState(false);
    const [codeDisplayOpen, setCodeDisplayOpen] = useState(false);
    const [componentLibraryOpen, setComponentLibraryOpen] = useState(false);
    const [responsiveControlsOpen, setResponsiveControlsOpen] = useState(false);

    function numberOpen() {
        let numberOpen:number = 0;
        if (canvasOpen) {numberOpen +=1}
        if (codeDisplayOpen) {numberOpen +=1}
        if (componentLibraryOpen) {numberOpen +=1}
        if (responsiveControlsOpen) {numberOpen +=1}
        return numberOpen;
    }

    const widthPercent = `${100 / numberOpen()}%`;

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

                {/* save button */}
                <div className="w-1/3 flex justify-center ">
                    <button className="border-2 border-[#c1c1c3] rounded-xl p-2 hover:bg-yellow-500 hover:border-white hover:text-white">Save</button>
                </div>


            </div>
            {menuToggled
              ?  <div className="transition-all duration-300 ease-in-out  flex items-center justify-center bg-black text-[#c1c1c3] p-2 w-full border-y-1 border-gray-600">
                    {canvasOpen
                        ? <button onClick={() => {setCanvasOpen(!canvasOpen); numberOpen();}} className={"w-1/4 flex text-yellow-400 justify-center hover:text-yellow-300"}>Canvas</button>
                        : <button onClick={() => {setCanvasOpen(!canvasOpen); numberOpen();}} className={"w-1/4 flex justify-center hover:text-white"}>Canvas</button>
                    }
                    {codeDisplayOpen
                        ? <button onClick={() => {setCodeDisplayOpen(!codeDisplayOpen); numberOpen();}} className={"w-1/4 flex text-yellow-400 justify-center hover:text-yellow-300"}>Code Display</button>
                        : <button onClick={() => {setCodeDisplayOpen(!codeDisplayOpen); numberOpen();}} className={"w-1/4 flex justify-center hover:text-white"}>Code Display</button>

                    }
                    {componentLibraryOpen
                        ? <button onClick={() => {setComponentLibraryOpen(!componentLibraryOpen); numberOpen();}} className={"w-1/4 flex text-yellow-400 justify-center hover:text-yellow-300"}>Component Library</button>
                        : <button onClick={() => {setComponentLibraryOpen(!componentLibraryOpen); numberOpen();}} className={"w-1/4 flex justify-center hover:text-white"}>Component Library</button>
                    }
                    {responsiveControlsOpen
                        ? <button onClick={() => {setResponsiveControlsOpen(!responsiveControlsOpen); numberOpen();}} className={"w-1/4 flex text-yellow-400 justify-center hover:text-yellow-300"}>Responsive Controls</button>
                        : <button onClick={() => {setResponsiveControlsOpen(!responsiveControlsOpen); numberOpen();}} className={"w-1/4 flex justify-center hover:text-white"}>Responsive Controls</button>
                    }
                </div>
                : null
            }

            <div style={{width: widthPercent}}>test</div>

        </div>

    )


}

export default Builder