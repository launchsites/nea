import {loadProjects, setProjectOpen} from "../utilities/storeProject"
import type {Project} from "./builder"
import {useNavigate} from "react-router-dom";
import {projectArray, createProject} from "../utilities/storeProject"
import { useState, useEffect } from "react"

 
export default function Projects(){

  let navigate = useNavigate()


  const [num, setnum] = useState(0)
  
  async function createProjectButton() {
    const projectTitle: string = prompt("What title would you like for your project?") || ""
    const projectDescription: string = prompt("What description would you like for your project") || ""

    createProject(projectTitle, projectDescription)
    setnum(num+1)
  }

  
  // on page load, wait for load projects, then update num variable to trigger UI refresh
  useEffect(() => {
    (async () => {
      await loadProjects()
      setnum(n => n+ 1)
    }) ()
  }, [])
  
  return(
    <main className="h-screen">
      <div className="flex justify-center items-center h-[20vh]">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold">Projects</h1>
          <button className="bg-gray-300 cursor-pointer transition hover:text-white rounded-xl p-2 hover:bg-gray-700 text-black" onClick={() => { createProjectButton() }}>Create new project</button>
        </div>
      </div>
      <div className="grid grid-cols-3 flex w-full bg-gray-300 h-[80vh] items-start">

        {projectArray.map((project) => (
          <div className="m-10 bg-white rounded-xl flex justify-center">
            <div className=" py-4 text-center space-y-4">
              <p className="text-xl font-semibold">{project.projectTitle}</p>
              <p>{project.projectDescription}</p>
              <button onClick={() => { setProjectOpen(project as Project) ; navigate("/builder", {state: project}) }} className="bg-gray-300 cursor-pointer transition hover:text-white rounded-xl p-2 hover:bg-gray-700 text-black">Open Project</button>
            </div>
          </div>
        ))}

      </div>
    </main>
  )
};