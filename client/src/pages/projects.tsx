export default function Projects(){

  const projectArray = [
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

  
  return(
    <main className="h-screen">
      <div className="flex justify-center items-center h-[10vh] text-xl font-bold">Projects</div>
      <div className="grid grid-cols-3 flex w-full bg-gray-300 h-[90vh] items-start">

        {projectArray.map((project) => (
          <div className="m-10 bg-white rounded-xl flex justify-center">
            <div className=" py-4 text-center space-y-4">
              <p className="text-xl font-semibold">{project.projectTitle}</p>
              <p>{project.projectDescription}</p>
              <button className="bg-gray-300 cursor-pointer transition hover:text-white rounded-xl p-2 hover:bg-gray-700 text-black">Open Project</button>
            </div>
          </div>
        ))}

      </div>
    </main>
  )
};