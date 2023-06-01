import Project from './Project'

const ProjectList = ({projects}) => {

const renderProjectCard = projects.map((project) => (
    <Project project={project} key={project.id} />
))

  return (
    <div className='container'>
      {renderProjectCard}
    </div>)
}

export default ProjectList