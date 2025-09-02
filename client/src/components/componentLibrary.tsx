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
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "html")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>html</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "head")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>head</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "body")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>body</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "div")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>div</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "section")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>section</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "article")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>article</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "header")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>header</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "footer")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>footer</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "nav")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>nav</div>
                            </div>
                        )}
                        {filterClicked == "content" && (
                            <div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "p")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>p</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "h1")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h1</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "h2")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h2</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "h3")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h3</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "h4")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h4</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "h5")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h5</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "h6")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>h6</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "span")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>span</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "br")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>br</div>
                            </div>
                                )}
                        {filterClicked == "forms" && (
                            <div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "a")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>a</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "button")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>button</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "form")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>form</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "input")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>input</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "label")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>label</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "option")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>option</div>
                            </div>
                        )}
                        {filterClicked == "media" && (
                            <div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "img")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>img</div>
                            </div>
                        )}
                        {filterClicked == "lists" && (
                            <div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "ul")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>ul</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "ol")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>ol</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "li")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>li</div>
                            </div>
                        )}
                        {filterClicked == "meta" && (
                            <div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "script")} className={"bg-yellow-500 hover:bg-yellow-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>script</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "style")} className={"bg-blue-500 hover:bg-blue-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>style</div>
                                <div draggable onDragStart={(event) => event.dataTransfer.setData("componentType", "title")} className={"cursor-move bg-orange-500 hover:bg-orange-400 p-1 mx-2 my-2 rounded-lg shadow text-white transition duration-200"}>title</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}