import { componentTemplates} from "../utilities/componentTemplates.ts";
import type { Component } from '../utilities/componentTypes.ts'
import {useState} from "react";

export default function ComponentLibrary() {

    const [openLibrary, setOpenLibrary] = useState("Content");

    return(
        <main>
            <div className={"w-full bg-gray-700 text-white border-x border-white" }>Component Library</div>
            <div>

                {/*component categories*/}
                <div className={"flex justify-center text-center"}>
                    {openLibrary === "Content"
                        ? <button onClick={() => setOpenLibrary("Content")} className={"bg-black border-x border-white w-1/4 text-yellow-400 hover:text-yellow-300"}>Content</button>
                        : <button onClick={() => setOpenLibrary("Content")} className={"bg-black border-x border-white w-1/4 text-[#c1c1c3] hover:text-white"}>Content</button>

                    }
                    {openLibrary === "Layout"
                        ? <button onClick={() => setOpenLibrary("Layout")} className={"bg-black border-x border-white w-1/4 text-yellow-400 hover:text-yellow-300"}>Layout</button>
                        : <button onClick={() => setOpenLibrary("Layout")} className={"bg-black border-x border-white w-1/4 text-[#c1c1c3] hover:text-white"}>Layout</button>

                    }
                    {openLibrary === "Forms"
                        ? <button onClick={() => setOpenLibrary("Forms")} className={"bg-black border-x border-white w-1/4 text-yellow-400 hover:text-yellow-300"}>Forms</button>
                        : <button onClick={() => setOpenLibrary("Forms")} className={"bg-black border-x border-white w-1/4 text-[#c1c1c3] hover:text-white"}>Forms</button>

                    }
                    {openLibrary === "Miscellaneous"
                        ? <button onClick={() => setOpenLibrary("Miscellaneous")} className={"bg-black border-x border-white w-1/4 text-yellow-400 hover:text-yellow-300"}>Miscellaneous</button>
                        : <button onClick={() => setOpenLibrary("Miscellaneous")} className={"bg-black border-x border-white w-1/4 text-[#c1c1c3] hover:text-white"}>Miscellaneous</button>

                    }
                </div>
                {openLibrary == "Content"
                    ? <div>
                        {/*Text: h1,2,3,4,5,6,p
                        Layout: div,br,body,html,span, footer
                        Forms: input button form option
                        Misc:
                        */}
                    </div>
                    : null
                }
                {openLibrary == "Layout"
                    ? <div className="overflow-y-auto h-[calc(100vh-180px)]">
                        <div className={"flex justify-center text-center"}>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}>div</div>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}></div>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}></div>
                        </div>
                        <div className={"flex justify-center text-center"}>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}>div</div>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}></div>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}></div>
                        </div>
                        <div className={"flex justify-center text-center"}>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}>div</div>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}></div>
                            <div className={"w-1/3 p-1 m-3 rounded-xl bg-orange-500 h-1/4 aspect-square text-center text-white"}></div>
                        </div>
                    </div>
                    : null
                }
                {openLibrary == "Forms"
                    ? <div></div>
                    : null
                }
                {openLibrary == "Miscellaneous"
                    ? <div></div>
                    : null
                }
            </div>
        </main>
    )
}