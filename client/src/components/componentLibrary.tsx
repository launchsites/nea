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
                <div className={"border-b-2 border-gray-300"}>Component Library</div>
                <div className={"flex columns-2"}>
                    <div className={"w-1/3 border-r-2 border-gray-300 flex flex-col"}>
                        <button onClick={() => setFilterClicked("structure")} className={filterClicked == "structure" ? clickedButtonClass : unclickedButtonClass}>Structure</button>
                        <button onClick={() => setFilterClicked("content")} className={filterClicked == "content" ? clickedButtonClass : unclickedButtonClass}>Text / Content</button>
                        <button onClick={() => setFilterClicked("forms")} className={filterClicked == "forms" ? clickedButtonClass : unclickedButtonClass}>Forms / Interactive</button>
                        <button onClick={() => setFilterClicked("media")} className={filterClicked == "media" ? clickedButtonClass : unclickedButtonClass}>Media</button>
                        <button onClick={() => setFilterClicked("lists")} className={filterClicked == "lists" ? clickedButtonClass : unclickedButtonClass}>Lists</button>
                        <button onClick={() => setFilterClicked("meta")} className={filterClicked == "meta" ? clickedButtonClass : unclickedButtonClass}>Meta / Logic</button>
                    </div>
                    <div className={"w-2/3"}>
                        {filterClicked == "structure" && ("structure")}
                        {filterClicked == "content" && ("content")}
                        {filterClicked == "forms" && ("forms")}
                        {filterClicked == "media" && ("media")}
                        {filterClicked == "lists" && ("lists")}
                        {filterClicked == "meta" && ("meta")}
                    </div>
                </div>
            </div>
        </main>
    )
}