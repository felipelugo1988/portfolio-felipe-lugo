// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import Sidenav  from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import ProjectItem from './components/ProjectItem'
import Contact from './components/Contact'

function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <ProjectItem />
        <Contact />
       </div>
  )
}

export default App
