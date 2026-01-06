import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp.tsx';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import Builder from './pages/builder.tsx';
import Projects from './pages/projects.tsx'
import {projectOpen} from "./utilities/storeProject.ts"


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
        <Route path={"/builder"} element={<Builder />}></Route>
      <Route path="/projects" element={<Projects/>}> </Route>
    </Routes>
    </div>
  )
};

export default App;