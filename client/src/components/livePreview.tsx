import type {htmlTag} from "../utilities/componentTypes.ts";


export default function LivePreview({components}) {

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
                exportString += `${component.contents} \n`
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

    let stringComponents = ""
    for (let i = 0; i < components.length; i++) {
        stringComponents += componentsToCode(components[i], components)
    }
    
    return(
        <main className={"py-16 bg-gray-200 h-screen"}>

            <div className={"flex m-6 text-lg bg-white rounded-2xl h-full text-gray-300 overflow-y-auto"}>
                <div dangerouslySetInnerHTML={{__html: stringComponents}}></div>
            </div>
        </main>
    )
}