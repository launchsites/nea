import type {Component, htmlTag} from "../utilities/componentTypes.ts";
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
    const [components, setComponents] = useState<placedComponent[]>([
        {
            acceptsChildren: true,
            attributes: {},
            color: "orange-500",
            id: "html0",
            selfClosing: false,
            styles: {},
            type: "html",
            x: 500,
            y: 500,
            children: [
                  {
                    acceptsChildren: true,
                    attributes: {},
                    id: "head0",
                    selfClosing: false,
                    styles: {},
                    type: "head",
                  },
                {
                    acceptsChildren: true,
                    attributes: {},
                    id: "head0",
                    selfClosing: false,
                    styles: {},
                    type: "style",
                    children: [{
                            acceptsChildren: true,
                            attributes: {},
                            id: "head0",
                            selfClosing: false,
                            styles: {},
                            type: "script",
                          }, ]
                  }
                ]
          },
    ]);

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


        //check if is new being dragged in, or old being moved
        if (event.dataTransfer.getData("componentID") !== "") {
            // get id of the moving component
            const draggedId = event.dataTransfer.getData("componentID");

            // make copy of current components array
            const updatedComponents = [...components];

            // for loop to find the component with the ID that is the same as the one moving
            for (let i = 0; i < updatedComponents.length; i++) {
                if (updatedComponents[i].id === draggedId) {
                    //change to current coordinates
                    updatedComponents[i].x = x;
                    updatedComponents[i].y = y;
                }
            }

            // usestate function to update components array to up to date version
            setComponents(updatedComponents);

            return;
        }

        else {
        // make new component to be added to components array
        const newComponent: placedComponent = {
            type: componentType,
            // function creates a unique id which includes the type of component it is
            id: (function generateID() {


                let running = true;
                //index of components
                let num: number = 0
                //string to return if somehow fails
                let fallBackString: string = ""
                while (running){
                    let found = false;
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
            // getting the attributes from the component templates
            selfClosing: componentTemplates.find(template => template.type === componentType)?.selfClosing??false,
            acceptsChildren: componentTemplates.find(template => template.type === componentType)?.acceptsChildren??false,
            attributes: componentTemplates.find(template => template.type === componentType)?.attributes ?? {},
            styles: componentTemplates.find(template => template.type === componentType)?.styles ?? {},
            // coordinates found earlier
            x: x,
            y: y,
            // html / js / css coloring
            color:
                (function chooseColor() {
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
        setComponents(previous => [...previous, newComponent]);
        }
    }


    
    function renderComponent(component: placedComponent) {
        function renderChild(child: placedComponent) {
            return(
                <div
                    key={child.id}
                    className={`relative bg-${(function chooseColor() {
                                                if (child.type == "script") {
                                                    return "yellow-500"
                                                }
                                                else if (child.type == "style") {
                                                    return "blue-500"
                                                }
                                                else {
                                                    return "orange-500"
                                                }
                                            }())} p-3 border-2 justify-center border-white text-white text-center rounded-lg shadow flex flex-col items-center`}
                    style={{ width: `${7.5+0}rem` }}
                    draggable
                    onDragStart={(event) => {
                        event.dataTransfer.setData("componentType", "html")
                        event.dataTransfer.setData("componentID", child.id)
                    } }
                >
                    <p className="pb-3">{`<${child.type}>`}</p>
                    {child.children?.map((child) => renderChild(child as placedComponent))}
                </div>
            )
        }
        return(
            <div
                key={component.id}
                className={`absolute bg-${component.color} p-3 border-2 justify-center border-white text-white text-center rounded-lg shadow flex flex-col items-center`}
                style={{ top: component.y, left: component.x, width: `${7.5+0}rem` }}
                draggable
                onDragStart={(event) => {
                    event.dataTransfer.setData("componentType", "html")
                    event.dataTransfer.setData("componentID", component.id)
                } }
            >
                <p className="pb-3">{`<${component.type}>`}</p>
                {component.children?.map((child) => renderChild(child as placedComponent))}
            </div>
        )
    }


    return(
        <main onDragOver={(event) => event.preventDefault()} onDrop={handleDrop} className={"flex-1 relative bg-[radial-gradient(#d1d5db_1.5px,transparent_0)] bg-[length:40px_40px]"}>
            {components.map((component) => (
                
            renderComponent(component)
        
            ))}
            
        </main>
    )
}

