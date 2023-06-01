import React, {useState, useEffect} from 'react'
import ProjectList from './ProjectList'

const ProjectContainer = () => {

useEffect(() => {
  fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then((projects) => {
            setProjects(projects)
        })
}, [])

const [projects, setProjects] = useState([])

    //     const renderProject = () => {
    //     fetch("http://localhost:3000/projects")
    //     .then(res => res.json())
    //     .then((projects) => {
    //         setProjects(projects)
    //     })
    //     // console.log(projects)
    // }

  return (
    <section id="projects">
         <h3>Projects:</h3>
         <ProjectList projects={projects} />
</section>
  )
}

export default ProjectContainer