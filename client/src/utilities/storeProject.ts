import type {Project} from "../pages/builder"

export let projectOpen: Project | null = null

export function setProjectOpen(project: Project) {
  projectOpen = project
}