import React from 'react';
import {useState} from 'react';
import Canvas from "../components/canvas.tsx";
import ComponentLibrary from "../components/componentLibrary.tsx";
import CodeDisplay from "../components/codeDisplay.tsx";
import type {Component, htmlTag} from "../utilities/componentTypes.ts";
// import LivePreview from "../components/livePreview.tsx";

//import {Link} from "react-router-dom";


const Builder: React.FC = () => {

    // interface for placed component
    interface placedComponent {
        type: htmlTag;
        id: string;
        selfClosing: boolean;
        acceptsChildren: boolean;
        attributes?: Record<string, string>;
        styles?: Record<string, string>;
        children?: Component[];
        x: number;
        y: number;
        color: string;
        class?: string;
        contents?: string;
    }

    // array of components on the canvas
    const [components, setComponents] = useState<placedComponent[]>([
    ]);

    const iconGrey: string = "#4B4B4B"
    const iconBlack: string = "#000"


    const [canvasOpen, setCanvasOpen] = useState(false);
    const [componentLibraryOpen, setComponentLibraryOpen] = useState(false);
    const [codeDisplayOpen, setCodeDisplayOpen] = useState(false);
    const [livePreviewOpen, setLivePreviewOpen] = useState(false);

    let [userStart, setUserStart] = useState(true)
    
    return (

        <main className={"bg-gray-50 flex-col flex h-screen"}>
        {/*header*/}
            <div className="flex justify-between items-center w-full absolute top-0 left-0 z-5000">
                <div className={"w-1/3"}>
                    <button className={"bg-white rounded-2xl w-fit shadow my-2 h-12 mx-5 p-3 hover:bg-gray-200 transition duration-300"}>← Projects</button>
                </div>
                <div className={"my-2 bg-white p-2 shadow rounded-2xl"}>
                    <div className={"flex w-fit justify-between space-x-6 text-center "}>
                        {!canvasOpen && !componentLibraryOpen && !codeDisplayOpen && !livePreviewOpen
                        ? <button onClick={() => {
                                setCanvasOpen(!canvasOpen) ; setCodeDisplayOpen(false) ; setLivePreviewOpen(false) ; if (canvasOpen) {setComponentLibraryOpen(false) ; setUserStart(false)}
                            }} className={"w-8 p-1 animate-bounce hover:animate-none rounded-2xl transition duration-200 hover:bg-gray-200"}><svg fill={canvasOpen ? iconBlack : iconGrey} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,18H7.382L6.105,20.553a1,1,0,0,0,1.79.894L9.618,18H11v2a1,1,0,0,0,2,0V18h1.382l1.723,3.447a1,1,0,1,0,1.79-.894L16.618,18H21a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V17A1,1,0,0,0,3,18ZM4,6H20V16H4Z"></path></g></svg></button>
                            : <button onClick={() => {
                                setCanvasOpen(!canvasOpen) ; setCodeDisplayOpen(false) ; setLivePreviewOpen(false) ; if (canvasOpen) {setComponentLibraryOpen(false) ; setUserStart(false)}
                            }} className={"w-8 p-1 rounded-2xl transition duration-200 hover:bg-gray-200"}><svg fill={canvasOpen ? iconBlack : iconGrey} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,18H7.382L6.105,20.553a1,1,0,0,0,1.79.894L9.618,18H11v2a1,1,0,0,0,2,0V18h1.382l1.723,3.447a1,1,0,1,0,1.79-.894L16.618,18H21a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H13V3a1,1,0,0,0-2,0V4H3A1,1,0,0,0,2,5V17A1,1,0,0,0,3,18ZM4,6H20V16H4Z"></path></g></svg></button>
                        }
                        <button onClick={() => {setComponentLibraryOpen(!componentLibraryOpen); setLivePreviewOpen(false) ; setCodeDisplayOpen(false) ; if(!componentLibraryOpen ){setCanvasOpen(true)} ; setUserStart(false)}} className={"w-8 p-1 rounded-2xl transition duration-200 hover:bg-gray-200"}><svg viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={componentLibraryOpen ? iconBlack : iconGrey}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_library_28_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_library_28_filled" fill={componentLibraryOpen ? iconBlack : iconGrey} fill-rule="nonzero"> <path d="M5.9897,3 C7.0937,3 7.9897,3.896 7.9897,5 L7.9897,23 C7.9897,24.104 7.0937,25 5.9897,25 L4.0007,25 C2.8957,25 2.0007,24.104 2.0007,23 L2.0007,5 C2.0007,3.896 2.8957,3 4.0007,3 L5.9897,3 Z M12.9897,3 C14.0937,3 14.9897,3.896 14.9897,5 L14.9897,23 C14.9897,24.104 14.0937,25 12.9897,25 L10.9947,25 C9.8897,25 8.9947,24.104 8.9947,23 L8.9947,5 C8.9947,3.896 9.8897,3 10.9947,3 L12.9897,3 Z M22.0701,6.5432 L25.9301,22.0262 C26.1971,23.0972 25.5441,24.1832 24.4731,24.4512 L22.5101,24.9402 C21.4391,25.2072 20.3531,24.5552 20.0861,23.4832 L16.2261,8.0002 C15.9581,6.9282 16.6111,5.8432 17.6821,5.5752 L19.6451,5.0862 C20.7161,4.8182 21.8021,5.4712 22.0701,6.5432 Z" id="🎨-Color"> </path> </g> </g> </g></svg></button>
                        <button onClick={() => {
                            setCodeDisplayOpen(!codeDisplayOpen); setCanvasOpen(false) ; setComponentLibraryOpen(false) ; setLivePreviewOpen(false) ; setUserStart(false)
                        }} className={"w-8 p-1 rounded-2xl transition duration-200 hover:bg-gray-200"}><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill={codeDisplayOpen ? iconBlack : iconGrey}></path> <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill={codeDisplayOpen ? iconBlack : iconGrey}></path> <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill={codeDisplayOpen ? iconBlack : iconGrey}></path> </g></svg></button>
                        <button onClick={() => {
                            setLivePreviewOpen(!livePreviewOpen) ; setCodeDisplayOpen(false) ; setCanvasOpen(false) ; setComponentLibraryOpen(false) ; setUserStart(false)
                        }} className={"w-8 p-1 rounded-2xl transition duration-200 hover:bg-gray-200"}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 21L12 17L17 21M7.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17Z" stroke={livePreviewOpen ? iconBlack : iconGrey} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                    </div>

                </div>
                <div className={"w-1/3 text-right"}>
                    <button className={"bg-white rounded-2xl w-fit shadow my-2 h-12 mx-5 p-3 hover:bg-gray-200 transition duration-300"}>Save</button>
                </div>
            </div>
            {componentLibraryOpen && (

                <div className={"z-6000 flex fixed justify-center items-center text-center mt-15 w-full"}>
                    <div className={"w-1/3 shadow rounded-2xl bg-white"}><ComponentLibrary></ComponentLibrary></div>
                </div>
            )
            }

            {!canvasOpen && !componentLibraryOpen && !codeDisplayOpen && !livePreviewOpen && userStart
                ? <div className={"flex-1 flex items-center justify-center"}><div className={"text-xl text-center bg-white p-3 rounded-2xl shadow"}>Welcome to canvas builder. Click the canvas icon to view the canvas.</div></div>
                : null
            }
            {canvasOpen && (
                <Canvas components={components} setComponents={setComponents}></Canvas>
            )}
            {codeDisplayOpen && (
                <CodeDisplay components={components}></CodeDisplay>
            )}
            {!canvasOpen && !componentLibraryOpen && !codeDisplayOpen && !livePreviewOpen && !userStart
                ? <Canvas components={components} setComponents={setComponents}></Canvas>
                : null
            }
        </main>

    )


}

export default Builder