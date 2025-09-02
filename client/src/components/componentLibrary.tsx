// import { componentTemplates} from "../utilities/componentTemplates.ts";
// import type { Component } from '../utilities/componentTypes.ts'
// import {useState} from "react";

import {useState} from "react";

export default function ComponentLibrary() {

    const clickedButtonClass: string = "bg-yellow-500 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200";
    const unclickedButtonClass: string = "mx-2 my-1 p-1";


    const [filterClicked, setFilterClicked] = useState("structure");

    return(
        <main>
            <div className={"rounded-2xl"}>
                <div className={"border-b-2 p-2 font-bold border-gray-300"}>Component Library</div>
                <div className={"flex columns-2"}>
                    <div className={"w-1/3 border-r-2 border-gray-300 flex flex-col"}>
                        <button onClick={() => setFilterClicked("structure")} className={filterClicked == "structure" ? clickedButtonClass : unclickedButtonClass}>Structure</button>
                        <button onClick={() => setFilterClicked("content")} className={filterClicked == "content" ? clickedButtonClass : unclickedButtonClass}>Text / Content</button>
                        <button onClick={() => setFilterClicked("forms")} className={filterClicked == "forms" ? clickedButtonClass : unclickedButtonClass}>Forms / Interactive</button>
                        <button onClick={() => setFilterClicked("media")} className={filterClicked == "media" ? clickedButtonClass : unclickedButtonClass}>Media</button>
                        <button onClick={() => setFilterClicked("lists")} className={filterClicked == "lists" ? clickedButtonClass : unclickedButtonClass}>Lists</button>
                        <button onClick={() => setFilterClicked("meta")} className={filterClicked == "meta" ? clickedButtonClass : unclickedButtonClass}>Meta / Logic</button>
                    </div>
                    <div className={"w-2/3 h-65 overflow-y-auto"}>
                        {filterClicked == "structure" && (
                            <div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>html</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>head</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>body</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>div</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>section</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>article</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>header</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>footer</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>nav</div>
                            </div>
                        )}
                        {filterClicked == "content" && (
                            <div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>p</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h1</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h2</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h3</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h4</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h5</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h6</div>
                            <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>span</div>
                        </div>
                        )}
                        {filterClicked == "forms" && (
                            <div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>a</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>button</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>form</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>input</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>label</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>option</div>
                            </div>
                        )}
                        {filterClicked == "media" && (
                            <div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>img</div>
                            </div>
                        )}
                        {filterClicked == "lists" && (
                            <div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>ul</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>ol</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>li</div>
                            </div>
                        )}
                        {filterClicked == "meta" && (
                            <div>
                                <div className={"bg-yellow-500 hover:bg-yellow-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>script</div>
                                <div className={"bg-blue-500 hover:bg-blue-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>style</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>title</div>
                                <div className={"bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>br</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}