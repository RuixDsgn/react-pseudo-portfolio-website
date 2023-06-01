import React, {useState} from 'react'

const Project = ({ project }) => {

  console.log(project)

const [like, setLike] = useState(0)

const handleLike = () => setLike(() => like + 1)

  return (
    <div>
     <div className="project-card">
          <p id='project-name'><strong>{project.name}</strong></p>
          <img src={project.image} alt={project.name} />
          <p id='project-description'>{project.description}</p>
          <button id="like-btn" onClick={handleLike}>❤️ : {like}</button>
     </div>
     <div>
      
     </div>
    </div>
  )
}

export default Project
