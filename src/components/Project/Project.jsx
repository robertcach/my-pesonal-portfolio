import { Link } from 'react-router-dom';
import './Project.scss';

const Project = ({ title, info, image, tecnologies, github, demo }) => {
  return (
    <article className="project">
      <img src={image} alt={title} className="project__image" />
      <h3 className="project__title">{title}</h3>
      <p className="project__info">{info}</p>

      <p>
        {tecnologies && tecnologies.map(tecnologie => <span> #{tecnologie} |</span> )}
      </p>
      <Link to={github}>GitHub</Link>
      <Link to={demo}>View project</Link>
    </article>
  )
}

export default Project;