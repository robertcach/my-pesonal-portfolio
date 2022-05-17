import './Project.scss';

interface ProjectProps {
  title: string;
  info: string;
  image: string;
  tecnologies: string[];
  github: string;
  demo: string;
}

const Project = (props: ProjectProps) => {
  return (
    <article className="project">
      <img src={props.image} alt={props.title} className="project__image" />
      <h3 className="project__title">{props.title}</h3>
      <p className="project__info">{props.info}</p>

      <p>
        {props.tecnologies && props.tecnologies.map(tecnologie => <span key={tecnologie}> #{tecnologie} |</span> )}
      </p>
      <a href={props.github} className="project__link" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={props.demo} className="project__link" target="_blank" rel="noopener noreferrer">View project</a>
    </article>
  )
}

export default Project;