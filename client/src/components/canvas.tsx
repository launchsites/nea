import type {Component, htmlTag} from "../utilities/componentTypes.ts";
import {componentTemplates} from "../utilities/componentTemplates.ts";
import {useState} from "react";

export default function Canvas({components, setComponents}) {

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


    function findComponent(components: placedComponent[] | any, componentId: string, option: "full" | "parents"| "children"): placedComponent | false {


        if (option == "full") {
            for (let i = 0; i < components.length; i++) {
                if (components[i].id == componentId) {
                    return components[i]
                }
                else if (components[i].children) {
                    const found = findComponent(components[i].children, componentId, "full")
                    if (found) {return found}
                }
            }
            return false
        }

        else if (option == "parents") {
            for (let i = 0; i < components.length; i++) {
                if (components[i].id == componentId) {
                    return components[i]
                }
            }
            return false
        }

        else if (option == "children") {
            for (let i = 0; i < components.length; i++) {
                if (components[i].children) {
                    const found = findComponent(components[i].children, componentId, "full")
                    if (found) {return found}
                }
            }
            return false
        }

        return false
        
    }

    function generateId(componentType: htmlTag) {

        let running = true;
        //index of components
        let num: number = 0
        //string to return if somehow fails
        let fallBackString: string = ""
        while (running){
            const found = findComponent(components, `${componentType}${num}`, "full")
            fallBackString += `${componentType}${num}`
            if (!found) {running = false ; return `${componentType}${num}`}
            else {num += 1}
            }
        return fallBackString
    };

    function findParent(components, componentId) {
        // searching each component
        for (let i = 0; i < components.length; i++) {
                    // if that component has children
                    if (components[i].children) {
                        // search if the top level of the children has the child
                        const found = findComponent(components[i].children, componentId, "parents")
                        // if it does have the child, return the parent
                        if (found) {return components[i]}
                // recurisvely does the same for all child components
                const deeper = findParent(components[i].children, componentId)
                // returns the parent if it is deeper
                if (deeper) {return deeper}
                    }
                }
                return false
    }

    function removeComponent(components: placedComponent[], componentId: string) {
        const parent = findParent(components, componentId);
        if (!parent) {return null}

        // find index
        let index: number
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i].id == componentId) {
                index = i
                break
            }
        }
        const component = parent.children[index]
        parent.children.splice(index, 1);
        return component
    }


    function editAttributes(components: placedComponent[], componentId: string, option: "attributes" | "styles"| "class" | "contents", change: any){

        let tempComponents = structuredClone(components)

        let component = findComponent(tempComponents, componentId, "full")

        if (option == "attributes"){

            component.attributes = change

    };
        if (option == "styles"){

            component.styles = change

    };
        if (option == "class"){

            component.class = change

    };
        if (option == "contents"){

            component.contents = change

    };

        setComponents(tempComponents)
    };

    

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


        //check scenarios

        const dragId = event.dataTransfer.getData("componentID");
        const dropTargetId = (event.target as HTMLElement).id;

        //dragged from component library
        if (dragId == ""){
            // make new component to be added to components array
            const newComponent: placedComponent = {
                type: componentType,
                // function creates a unique id which includes the type of component it is
                id: (generateId(componentType)),
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
            setComponents((previous: placedComponent[]) => [...previous, newComponent]);

        }

        //dragged on canvas
        else if(findComponent(components, dragId, "parents") && !dropTargetId){
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

        // child dragged to canvas
        else if(findComponent(components, dragId, "children") && !dropTargetId){

            let component = removeComponent(components, dragId)

            component.x = x
            component.y = y
            component.color = (function chooseColor() {
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

            setComponents((previous: placedComponent[]) => [...previous, component]);

        }
        //component becomes child
        else if(findComponent(components, dragId, "full") && dropTargetId){


            // alert(`dragged element: ${dragId}\nonto: ${dropTargetId}`)

            
            let tempComponents = structuredClone(components)


            const hasParent = findParent(components, dragId)

            let component: placedComponent | null = null

            if (hasParent) {
                component = removeComponent(tempComponents, dragId)
            }
            else {
                component = findComponent(tempComponents, dragId, "full")
                for (let i = 0; i < tempComponents.length; i++) {
                    if (tempComponents[i].id == dragId) {
                        tempComponents.splice(i, 1)
                    }
                }
            }

            delete component.x
            delete component.y


            let newParent = findComponent(tempComponents, dropTargetId, "full")

            if (newParent.children) {newParent.children.push(component)}
            else {newParent.children = [component]}

            setComponents(tempComponents)
            
            
        
        }
    }

    // modification window

    function ModificationWindow({components, componentId}) {
        let tempComponents = structuredClone(components);
        let tempComponent = findComponent(tempComponents, componentId, "full");

        const [openSection, setOpenSection] = useState("attributes");

        const activeSectionClass: string = "bg-[#4B4B4B] text-white"
        const notActiveSectionClass: string = "bg-grey-300"

        
        function attributesWindow(tempComponents, tempComponent: placedComponent){

            let attributes = tempComponent.attributes
            // let attributes = { attribute1: "1", attribute2: "2"}
            let keys = Object.keys(attributes)

            function newAttribute(attributes){
                let key = prompt("Enter the key of the attribute")
                let value = prompt("Enter the value of the attribute")

                attributes = {...attributes, [key]: value}
                editAttributes(tempComponents, tempComponent.id, "attributes", attributes)
            }

            function removeAttribute(attributes) {
                let key = prompt("Enter the key of the attribute")
                let confirm = prompt("Type CONFIRM in block capitals")
                if (confirm = "CONFIRM") {
                    let temp = attributes
                    delete temp[key]
                    editAttributes(tempComponents, tempComponent.id, "attributes", temp)
                }
            }
            
            
            return(
                <div>
                    <div className="border-[#4b4b4b] border-1 rounded-xl p-3">
                <p>{keys.map((key)=>{
                    return (<div className="flex gap-10"><p>{key}</p> = <p>{attributes[key]}</p></div>)
                })}</p>
                        </div>

                    <button className="mt-2 text-white p-3 mr-3 hover:bg-gray-600 transition bg-[#4B4B4B] rounded-xl" onClick={() => newAttribute(attributes)}>Add Attribute</button>
                    <button className="mt-2   text-white p-3 hover:bg-white hover:text-red-500 transition bg-red-500 rounded-xl" onClick={() => removeAttribute(attributes)}>Remove Attribute</button>
                </div>
                
            )
        };

        function classWindow(tempComponents, tempComponent: placedComponent){

            let classes = tempComponent.class
            // let attributes = { attribute1: "1", attribute2: "2"}

            function newClass(classes){
                let newClass = prompt("Enter the class")

                classes = `${newClass}`
                editAttributes(tempComponents, tempComponent.id, "class", classes)
            }


            return(
                <div>
                    <div className="border-[#4b4b4b] border-1 rounded-xl p-3">
                <p><div className="flex gap-10"><p>{classes}</p></div></p>
                        </div>

                    <button className="mt-2 text-white p-3 hover:bg-gray-600 transition bg-[#4B4B4B] rounded-xl" onClick={() => newClass(classes)}>Rewrite Class</button>
                </div>

            )
        };

        function contentsWindow(tempComponents, tempComponent: placedComponent){

            let contents = tempComponent.contents
            // let attributes = { attribute1: "1", attribute2: "2"}

            function newContents(contents){
                let newContents = prompt("Enter the class")

                contents = `${newContents}`
                editAttributes(tempComponents, tempComponent.id, "contents", contents)
            }


            return(
                <div>
                    <div className="border-[#4b4b4b] border-1 rounded-xl p-3">
                <p><div className="flex gap-10"><p>{contents}</p></div></p>
                        </div>

                    <button className="mt-2 text-white p-3 hover:bg-gray-600 transition bg-[#4B4B4B] rounded-xl" onClick={() => newContents(contents)}>Rewrite Contents</button>
                </div>

            )
        };

        function stylesWindow(tempComponents, tempComponent: placedComponent){

            let styles = tempComponent.styles
            let keys = Object.keys(styles)

            function newStyle(styles){
                let key = prompt("Enter the key of the style")
                let value = prompt("Enter the value of the style")

                styles = {...styles, [key]: value}
                editAttributes(tempComponents, tempComponent.id, "styles", styles)
            }

            function removeStyle(styles) {
                let key = prompt("Enter the key of the style")
                let confirm = prompt("Type CONFIRM in block capitals")
                if (confirm = "CONFIRM") {
                    let temp = styles
                    delete temp[key]
                    editAttributes(tempComponents, tempComponent.id, "styles", temp)
                }
            }


            return(
                <div>
                    <div className="border-[#4b4b4b] border-1 rounded-xl p-3">
                <p>{keys.map((key)=>{
                    return (<div className="flex gap-10"><p>{key}</p> = <p>{styles[key]}</p></div>)
                })}</p>
                        </div>

                    <button className="mt-2 text-white p-3 mr-3 hover:bg-gray-600 transition bg-[#4B4B4B] rounded-xl" onClick={() => newStyle(styles)}>Add Styles</button>
                    <button className="mt-2   text-white p-3 hover:bg-white hover:text-red-500 transition bg-red-500 rounded-xl" onClick={() => removeStyle(styles)}>Remove Styles</button>
                </div>

            )
        };
        
        return(

            //wrapper
            <div className="w-full z-9999 text-black fixed top-0 left-0 h-screen justify-center items-center flex">
                <div className="bg-gray-200 rounded-l p-4">
                <div className="relative mb-7">
                    <button className="hover:text-red-600 top-0 right-0 absolute" onClick={()=> setOpenPanel("none")}>X</button>
                </div>
                {/* menu */}
                <div className="flex overflow-x-auto min-h-[4vh]">
                    <button onClick={() => setOpenSection("attributes")} className={`p-1 rounded-xl text-xs ${openSection == "attributes" ? activeSectionClass : notActiveSectionClass}`}>Attributes</button>
                    <button onClick={() => setOpenSection("classes")} className={`p-1 rounded-xl text-xs ${openSection == "classes" ? activeSectionClass : notActiveSectionClass}`}>Classes</button>
                    <button onClick={() => setOpenSection("content")} className={`p-1 rounded-xl text-xs ${openSection == "content" ? activeSectionClass : notActiveSectionClass}`}>Content</button>
                    <button onClick={() => setOpenSection("styles")} className={`p-1 rounded-xl text-xs ${openSection == "styles" ? activeSectionClass : notActiveSectionClass}`}>Styles</button>
                </div>

                {/* change */}
                <div className="rounded-l bg-white my-3"></div>

                    {openSection == "attributes" ? attributesWindow(tempComponents, tempComponent) : null}
                    {openSection == "classes" ? classWindow(tempComponents, tempComponent) : null}
                    {openSection == "content" ? contentsWindow(tempComponents, tempComponent) : null}
                    {openSection == "styles" ? stylesWindow(tempComponents, tempComponent) : null}
                </div>
            </div>
        );
        
    };


    
    // needs to for each child figure out which goes deeper, and then add that to levels and compare them
    function calculateLevels(components: placedComponent[] | any) {
        // levels start at 0
        // for each level it needs to add 1
        // it will do this recursively and compare which child returns a greater value, adding that to the current levels
        let levels = 0
        let tempLevels = 0
        for (let i=0; i < components.length; i++) {
            if (components[i].children) {
                levels += 1
                if (calculateLevels(components[i].children) > tempLevels) {
                    tempLevels = calculateLevels(components[i].children)
                }
            }
        }
        levels += tempLevels
        return levels

    }

    const levels = calculateLevels(components)

    const [openPanel, setOpenPanel] = useState("none");
    
    function renderComponent(component: placedComponent, levels: number) {
        let depth = 0
        function renderChild(child: placedComponent, depth: number, levels: number) {

            depth += 1
            
            return(
                <div
                    key={child.id}
                    id={child.id}
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
                                            }())} p-3 m-2 border-2 justify-center border-white text-white text-center rounded-lg shadow flex flex-col items-center`}
                    style={{ width: `${7.5+(4*(levels-depth))}rem`, zIndex: 1000 + depth }}
                    draggable
                    onDragStart={(event) => {
                        // check if that is one dragging to stop ultra parent always takign
                        if (event.target === event.currentTarget) {
                            event.dataTransfer.setData("componentType", "html")
                            event.dataTransfer.setData("componentID", child.id)
                        }
                    } }
                >
                    <button onClick={() => setOpenPanel(openPanel == "none" ? `${child.id}` : "none")} className="pb-3 hover:text-black">{`<${child.type}>`}</button>
                    {
                        child.children?.map((child) => renderChild(child as placedComponent, depth, levels))}
                    {openPanel != `${child.id}` ?
                        
                        null

                        : <ModificationWindow components={components} componentId={child.id}/>
                    
                    }
                </div>
            )
        }
        return(
            <div
                key={component.id}
                id={component.id}
                className={`absolute bg-${component.color} p-3 border-2 justify-center border-white text-white text-center rounded-lg shadow flex flex-col items-center`}
                style={{ top: component.y, left: component.x, width: `${7.5+(4*levels)}rem`, zIndex: 1000 }}
                draggable
                onDragStart={(event) => {
                    if (event.target === event.currentTarget) {
                        event.dataTransfer.setData("componentType", "html")
                        event.dataTransfer.setData("componentID", component.id)
                    }
                } }
                onDragOver={(event) => event.preventDefault()} onDrop={handleDrop}
            >
                <button onClick={() => setOpenPanel(openPanel == "none" ? `${component.id}` : "none")} className="hover:text-black pb-3">{`<${component.type}>`}</button>
                { component.children?.map((child) => renderChild(child as placedComponent, depth, levels))}
                {openPanel != `${component.id}` ?
                    
                   null

                    : <ModificationWindow components={components} componentId={component.id}/>
                
                }
            </div>
        )
    }


    return(
        <main onDragOver={(event) => event.preventDefault()} onDrop={handleDrop} className={"flex-1 relative bg-[radial-gradient(#d1d5db_1.5px,transparent_0)] bg-[length:40px_40px]"}>
            {components.map((component: placedComponent) => (
                
            renderComponent(component, levels)
        
            ))}
            
        </main>
    )
}

