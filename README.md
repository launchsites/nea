# Canvas Website Builder (OCR A-Level Computing NEA)

This repository contains my OCR A-Level Computer Science NEA project: a **visual, drag-and-drop website builder** that generates **HTML** from a component tree and shows a **live preview**.

> **Note for exam integrity:** This repo is published for transparency/portfolio purposes. If you are a current OCR NEA candidate, **do not copy** any part of this project or documentation — you can get flagged for malpractice.

---

## Contents

- `source-code/`  
  Full project source code (client + server + database integration).
- `writeup/`  
  NEA write-up, appendix, and **full system test video** evidence.

---

## What the project does

- **Visual website building** (no typing HTML required to create a page)
- **Drag & drop** components onto a canvas
- **Nested / hierarchical structures** (parent/child component relationships)
- **Edit component properties** (e.g., text content, classes, attributes/styles — depending on component type)
- **Generate readable HTML** with indentation/formatting
- **Live preview** renders the generated HTML
- **Accounts + projects** (create account, log in, create projects, save + reload later)
- **Robust under heavy usage** (tested by rapidly adding/nesting many components)

---

## Evidence / Documentation

All NEA documentation and testing evidence is inside:

- `writeup/`
    - Main write-up
    - Appendix
    - Full system testing video

---

## Tech stack

- **Frontend:** React + TypeScript + TailwindCSS
- **Backend:** Node.js + Express (TypeScript)
- **Database:** PostgreSQL (hosted)
- **Data format:** Projects stored as JSON snapshots (component tree / state)

---

## Quick start (run locally)

> The exact scripts/commands depend on how your `source-code/` folder is structured (monorepo vs separate client/server). The steps below cover the standard setup.

### 1) Clone

```bash
git clone <this-repo-url>
cd <repo-folder>

2) Install dependencies

If source-code/ is a single project:

cd source-code
npm install

If you have separate client/ and server/:

cd source-code/client
npm install
cd ../server
npm install

3) Environment variables

Create a .env file in the server directory (and client if required).

Typical variables look like:

DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DBNAME
PORT=3001
CLIENT_URL=http://localhost:5173

If you’re using a hosted Postgres provider, use their connection string for DATABASE_URL.

4) Run the app

Client (example):

npm run dev

Server (example):

npm run dev

Then open the client URL printed in your terminal (commonly http://localhost:5173).

⸻

How to use
	1.	Open the homepage
	2.	Create an account (sign up)
	3.	Log in
	4.	Create a project (title + description)
	5.	Open the project to access the builder
	6.	Drag components from the library onto the canvas
	7.	Nest components by dragging into other components
	8.	Edit text/classes/attributes where supported
	9.	View generated HTML and the live preview
	10.	Save, exit, and reopen later to confirm persistence

⸻

Testing overview

Testing evidence is included in writeup/ and covers:
	•	Functional full-system tests (normal user workflows)
	•	Usability testing (beginner user + experienced user feedback)
	•	Robustness testing (stress tests like rapid component addition and nesting)

⸻

Notes on limitations (current state)
	•	Syntax highlighting: Not implemented in the final build (planned future improvement).
	•	Beginner clarity for nesting/code changes: Some beginner feedback indicated nesting and interpreting code changes could be improved with better visual cues and tips.
	•	Component deletion / canvas navigation tools (zoom/pan): Suggested as improvements by usability testers.

These are discussed in the NEA evaluation section inside writeup/.

⸻

Roadmap / Future improvements
	•	Add syntax highlighting for generated HTML (e.g., Prism)
	•	Add component delete / undo-redo
	•	Improve nesting drop-zone visuals (clearer highlighting and placement feedback)
	•	Add tips/tooltips for beginners to explain how canvas actions map to HTML
	•	Add zoom/pan for larger projects
	•	Improve password hashing by switching to a standard, battle-tested approach (e.g., bcrypt/argon2 with salt)

⸻

License

All rights reserved.

You may read the code, but you may not copy, redistribute, or submit this work (or derivatives) as your own — especially for OCR NEA submissions.

If you want to reference the project for general inspiration, ask first and I’m happy to point you to the ideas without reusing implementation.
