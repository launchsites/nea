import type {Project} from "../pages/builder"


let username: string
let id: string

export function updateUsername(newUsername: string) {
  username = newUsername
}

export function updateUserId(newId: string) {
  id = newId
}



export let projectArray = [
  {
    projectTitle: "project1",
    projectDescription: "this was my first project",
    componentsArray: [{
          "type": "html",
          "id": "html0",
          "selfClosing": false,
          "acceptsChildren": true,
          "attributes": {},
          "styles": {},
          "x": 935,
          "y": 234,
          "color": "orange-500",
          "children": [
            {
              "type": "head",
              "id": "head0",
              "selfClosing": false,
              "acceptsChildren": true,
              "attributes": {},
              "styles": {},
              "color": "orange-500"
            },
            {
              "type": "body",
              "id": "body0",
              "selfClosing": false,
              "acceptsChildren": true,
              "attributes": {},
              "styles": {
                "cornerradius": "3px"
              },
              "color": "orange-500",
              "children": [
                {
                  "type": "div",
                  "id": "div0",
                  "selfClosing": false,
                  "acceptsChildren": true,
                  "attributes": {},
                  "styles": {},
                  "color": "orange-500",
                  "children": [
                    {
                      "type": "h1",
                      "id": "h10",
                      "selfClosing": false,
                      "acceptsChildren": true,
                      "attributes": {},
                      "styles": {
                        "stroke": "bold"
                      },
                      "color": "orange-500",
                      "children": [],
                      "class": "h1-body"
                    },
                    {
                      "type": "p",
                      "id": "p0",
                      "selfClosing": false,
                      "acceptsChildren": true,
                      "attributes": {},
                      "styles": {},
                      "color": "orange-500"
                    }
                  ]
                },
                {
                  "type": "script",
                  "id": "script0",
                  "selfClosing": false,
                  "acceptsChildren": true,
                  "attributes": {},
                  "styles": {},
                  "color": "yellow-500",
                  "contents": "console.log(\"what a great NEA\")"
                }
              ],
              "class": "body-class"
            }
          ]
        }
      ],
  },
  {
    projectTitle: "project2",
    projectDescription: "this was my second project",
    componentsArray: [{
          "type": "html",
          "id": "html0",
          "selfClosing": false,
          "acceptsChildren": true,
          "attributes": {},
          "styles": {},
          "x": 935,
          "y": 234,
          "color": "orange-500",
          "children": [
            {
              "type": "head",
              "id": "head0",
              "selfClosing": false,
              "acceptsChildren": true,
              "attributes": {},
              "styles": {},
              "color": "orange-500"
            },
            {
              "type": "body",
              "id": "body0",
              "selfClosing": false,
              "acceptsChildren": true,
              "attributes": {},
              "styles": {
                "cornerradius": "3px"
              },
              "color": "orange-500",
              "children": [
                {
                  "type": "div",
                  "id": "div0",
                  "selfClosing": false,
                  "acceptsChildren": true,
                  "attributes": {},
                  "styles": {},
                  "color": "orange-500",
                  "children": [
                    {
                      "type": "h1",
                      "id": "h10",
                      "selfClosing": false,
                      "acceptsChildren": true,
                      "attributes": {},
                      "styles": {
                        "stroke": "bold"
                      },
                      "color": "orange-500",
                      "children": [],
                      "class": "h1-body"
                    },
                    {
                      "type": "p",
                      "id": "p0",
                      "selfClosing": false,
                      "acceptsChildren": true,
                      "attributes": {},
                      "styles": {},
                      "color": "orange-500"
                    }
                  ]
                },
                {
                  "type": "script",
                  "id": "script0",
                  "selfClosing": false,
                  "acceptsChildren": true,
                  "attributes": {},
                  "styles": {},
                  "color": "yellow-500",
                  "contents": "console.log(\"what a great NEA\")"
                }
              ],
              "class": "body-class"
            }
          ]
        }
      ],
  },
  {
    projectTitle: "project3",
    projectDescription: "this was my third project",
    componentsArray: [{
          "type": "html",
          "id": "html0",
          "selfClosing": false,
          "acceptsChildren": true,
          "attributes": {},
          "styles": {},
          "x": 935,
          "y": 234,
          "color": "orange-500",
          "children": [
            {
              "type": "head",
              "id": "head0",
              "selfClosing": false,
              "acceptsChildren": true,
              "attributes": {},
              "styles": {},
              "color": "orange-500"
            },
            {
              "type": "body",
              "id": "body0",
              "selfClosing": false,
              "acceptsChildren": true,
              "attributes": {},
              "styles": {
                "cornerradius": "3px"
              },
              "color": "orange-500",
              "children": [
                {
                  "type": "div",
                  "id": "div0",
                  "selfClosing": false,
                  "acceptsChildren": true,
                  "attributes": {},
                  "styles": {},
                  "color": "orange-500",
                  "children": [
                    {
                      "type": "h1",
                      "id": "h10",
                      "selfClosing": false,
                      "acceptsChildren": true,
                      "attributes": {},
                      "styles": {
                        "stroke": "bold"
                      },
                      "color": "orange-500",
                      "children": [],
                      "class": "h1-body"
                    },
                    {
                      "type": "p",
                      "id": "p0",
                      "selfClosing": false,
                      "acceptsChildren": true,
                      "attributes": {},
                      "styles": {},
                      "color": "orange-500"
                    }
                  ]
                },
                {
                  "type": "script",
                  "id": "script0",
                  "selfClosing": false,
                  "acceptsChildren": true,
                  "attributes": {},
                  "styles": {},
                  "color": "yellow-500",
                  "contents": "console.log(\"what a great NEA\")"
                }
              ],
              "class": "body-class"
            }
          ]
        }
      ],
  }
]

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