import {useState} from "react";

export default function CodeDisplay() {

    const blocks = ["index.html", "canvas.tsx"];
    const [openblock, setOpenblock] = useState(`${blocks[0]}`);

    return(
        <main className={"pt-16 bg-gray-200 h-screen"}>
            <div className={"flex items-center justify-center gap-1 overflow-x-auto"}>
                {blocks.map((value) => (
                    <button className={openblock === value ? "flex bg-white my-2 p-3 rounded-2xl shadow border-b-2 border-gray-[#4B4B4B]" : "flex bg-white my-2 p-3 rounded-2xl shadow"} onClick={
                        () => {setOpenblock(value)}
                    } key={value}>{value}</button>
                    )
                )
                }
            </div>
            <div className={"flex m-6 bg-gray-700 rounded-2xl h-160 text-gray-300"}>
                <div className={"w-30 rounded-l-2xl justify-center text-right p-3"}>
                    <p>1</p>
                    <p>2</p>
                </div>
                <div className={"w-full overflow-x-auto rounded-r-2xl text-left p-3 px-10"}>
                    <p>for i in range</p>
                </div>
            </div>
            <div></div>
        </main>
    );
}