import { Component, htmlTag} from "../utilities/componentTypes.ts";
import {componentTemplates} from "../utilities/componentTemplates.ts";
import {useState} from "react";

export default function Canvas() {

    // interface for placed component
    interface placedComponent {
        type: htmlTag;
        id: string
        selfClosing: boolean;
        acceptsChildren: boolean;
        attributes?: Record<string, string>;
        styles?: Record<string, string>;
        children?: Component[];
        x: number
        y: number
        color: string
    }

    // array of components on the canvas
    const [components, setComponents] = useState<placedComponent[]>([]);

    function handleDrop(event: React.DragEvent) {
        //stop it dispaering
        event.preventDefault()
        // get the component type from the dragged component
        const componentType: htmlTag = event.dataTransfer.getData("componentType") as htmlTag
        console.log("componentType", componentType)

        //get bounding box (where the canvas is on the screen)
        const canvasLocation = (event.currentTarget as HTMLElement).getBoundingClientRect()

        //get coordinates
        const x = event.clientX - canvasLocation.left
        const y = event.clientY - canvasLocation.top
        console.log(x, y)

        const newComponent: placedComponent = {
            type: componentType,
            id: (function generateID() {
                let found = false;
                let running = true;
                let num: number = 0
                let fallBackString: string = ""
                while (running){
                    for (let i = 0; i < components.length; i++) {
                        if (components[i].id === `${componentType}${num}`) {
                            found = true;
                        }
                    }
                    fallBackString += `${componentType}${num}`
                    if (!found) {running = false ; return `${componentType}${num}`}
                    else {num += 1}
                }
                return fallBackString
            } ()),
            selfClosing: componentTemplates.find(template => template.type === componentType)?.selfClosing??false,
            acceptsChildren: componentTemplates.find(template => template.type === componentType)?.acceptsChildren??false,
            attributes: componentTemplates.find(template => template.type === componentType)?.attributes ?? {},
            styles: componentTemplates.find(template => template.type === componentType)?.styles ?? {},
            x: x,
            y: y,
            color: (function chooseColor() {
                if (componentType == "script") {
                    return "yellow-500"
                }
                else if (componentType == "style") {
                    return "blue-500"
                }
                else {
                    return "orange-500"
                }
            }())
        }
    }

    return(
        <main onDragOver={(event) => event.preventDefault()} onDrop={handleDrop} className={"flex-1 bg-[radial-gradient(#d1d5db_1.5px,transparent_0)] bg-[length:40px_40px]"}>

        </main>
    )
}

