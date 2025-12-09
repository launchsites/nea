import type {htmlTag} from "../utilities/componentTypes.ts";
// import {componentTemplates} from "../utilities/componentTemplates.ts";
// import {useState} from "react";

export default function CodeDisplay({components}) {
    
    // interface for placed component
    interface placedComponent {
        type: htmlTag;
        id: string;
        selfClosing: boolean;
        acceptsChildren: boolean;
        attributes?: Record<string, string>;
        styles?: Record<string, string>;
        children?: placedComponent[];
        x: number;
        y: number;
        color: string;
        class?: string;
        contents?: string;
    }
    
    function componentsToCode(component: placedComponent, components: placedComponent[]){
        let exportString = `<${component.type} id="${component.id}" `
        if (component.class) {
            exportString += `class="${component.class}" `
        }
        if (component.attributes){
            for (let [key, value] of Object.entries(component.attributes)) {
                exportString += `${key}="${value}" `
            }
        }
        if (component.styles){
            exportString += `style="`
            for (let [style, value] of Object.entries(component.styles)) {
                exportString += `${style}: ${value}; `
            }
            exportString += `"`
        }
        if (component.selfClosing) {
            exportString += "/"
        }
        exportString += ">"

        if (component.contents) {
            exportString += `${component.contents} `
        }

        if (component.children) {
            for (let i = 0; i < component.children.length; i++) {
                exportString += `${componentsToCode(component.children[i], components)}`
            }
        }


        if (!component.selfClosing) {
            exportString += `</${component.type}>`
        }

        return exportString
    };

    let rawCode = ""
        
    for (let i = 0; i < components.length; i++) {
        
        rawCode += `${componentsToCode(components[i], components)}`

    }

    function insertLines(rawCode): [string, number]{
        let lineCount = 0
        let start = 0
        let end: number
        let linedCode = ""
        for (let i = 0; i < rawCode.length; i++) {
            if (rawCode[i] == ">"){
                lineCount += 1
                end = i + 1
                linedCode += `${rawCode.slice(start, end)}\n`
                start = i + 1
            }
        }
        
        return [linedCode, lineCount]
    };

    let [linedCode, lineCount] = insertLines(rawCode)

    function numberLines(lineCount){
        let temp = ""
        for (let i = 0; i < lineCount; i++) {
            temp += `${i+1}\n`
        }
        return temp
    }

    function indentCode(linedCode: string) {

        // measure of how indented we are
        let indent = 0
        // stored string of a tab
        let space = "    "
        // string to output
        let output = ``
        // defining start index
        let start = 0

        
        for (let i = 0; i < linedCode.length; i++) {
            // case for opening tag
            if (linedCode[i] == "<" && linedCode[i+1] != "/") {
                output += linedCode.slice(start, i)
                output += space.repeat(indent)
                indent += 1
                start = i
            }
            // case for closing tag
            else if(linedCode[i] == "<" && linedCode[i+1] == "/"){
                output += linedCode.slice(start, i)
                indent -= 1
                output += space.repeat(indent)
                start = i
            }

            // case for self closing tag
            else if(linedCode[i] == "/" && linedCode[i+ 1] == ">") {
                indent -= 1
            }

            // never lose the last tag
            if (linedCode.slice(start, i) == linedCode.slice(start, -1)) {
                output += linedCode.slice(start, i)
            }
        }
        return output
    }

    let indentedCode = indentCode(linedCode)
    
    return(
        <main className={"py-16 bg-gray-200 h-screen"}>
            
            <div className={"flex m-6 text-lg bg-gray-700 rounded-2xl h-full text-gray-300 overflow-y-auto"}>
                <div className={"w-30 rounded-l-2xl justify-center text-right p-3"}>
                    <pre>{numberLines(lineCount)}</pre>
                </div>
                <div className={"w-full rounded-r-2xl text-left p-3 px-10"}>
                    <pre>{components.length > 0 ? indentedCode : null}</pre>
                </div>
            </div>
            <div></div>
        </main>
    );
}