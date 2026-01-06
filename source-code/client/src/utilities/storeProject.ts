import type {placedComponent, Project} from "../pages/builder.tsx"


let username = ""
let id = ""

export function updateUsername(newUsername: string) {
  username = newUsername
}

export async function updateUserId(newId: string) {
  id = newId
  await loadProjects()
}

export let projectArray = []

// retrieve projects from database
export async function loadProjects(){
  const response = await fetch("/server/get-projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      id: id,
    }),
  })
  const data = await response.json()
  console.log("done")

  if (data.length !== 0) {
    projectArray = data.map((row: any) => ({
      projectTitle: row.projectjson.projectTitle,
      projectDescription: row.projectjson.projectDescription,
      componentsArray: row.projectjson.componentsArray,
      id: row.id
    }))
  }
  else {projectArray = []}
}

export async function createProject(projectTitle:string, projectDescription: string) {
  const response = await fetch('/server/create-project', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: id,
      projectTitle: projectTitle,
      projectDescription: projectDescription
    }),
  })
  const data = await response.json()
  if (data.status === "yes"){
    loadProjects()
  }
  loadProjects()
}


export async function saveProjectRequest(components: placedComponent[]) {
  const response = await fetch("/server/save-project", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        id: id,
        projectTitle: projectOpen?.projectTitle,
        projectDescription: projectOpen?.projectDescription,
        projectId: projectOpen?.id,
        newComponents: components
    }),
  })
  const data = await response.json()
  console.log(data.status)
}


export let projectOpen: Project | null = null

export function setProjectOpen(project: Project | null) {
  projectOpen = project

  let newProject = true
  for (let i = 0; i < projectArray.length; i ++){
    if (projectArray[i].projectTitle == projectOpen?.projectTitle && projectArray[i].projectDescription == projectOpen?.projectDescription) {
      newProject = false
    }
  }
  if (newProject && projectOpen !== null) {
    projectArray = [...projectArray, projectOpen]

  }
}