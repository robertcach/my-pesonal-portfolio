import { Link } from 'react-router-dom';
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
        {props.tecnologies && props.tecnologies.map(tecnologie => <span> #{tecnologie} |</span> )}
      </p>
      <Link to={props.github}>GitHub</Link>
      <Link to={props.demo}>View project</Link>
    </article>
  )
}

export default Project;