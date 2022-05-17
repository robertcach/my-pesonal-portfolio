import Project from '../../components/Project/Project';
/* import { useState } from 'react'; */
import './Home.scss'

const Home = () => {
/*   const [number, setNumber] = useState<number>(5)

  const changeNumber = () => {
    setNumber(number + 1)
  } */
  
  return (
    <main>
      <section className="header">
        <h1 className="header__title">DESARROLLADOR FRONTEND &<br />DISEÑADOR.</h1>
      </section>
{/* 
      <p>{number}</p>
      <button onClick={changeNumber}>Change</button> */}

      <section className="about wrapper">
        <div className="about__left">
          <img src="https://picsum.photos/500/400?grayscale" alt="about me" />
        </div>
        <div className="about__right">
          <h2 className="about__title">Friki. Seriéfilo.<br />
            Amante de los comics.</h2>

          <p className="about__info">Me llamo Robert y después de 10 años dedicándome al sector <strong>creativo</strong>, decidí darle protagonismo al lado izquierdo del cerebro. Sí, ese del que dicen que prima la <strong>lógica</strong>. En otras palabras, ahora soy <strong>desarrollador Frontend</strong>.</p>
          
          <p className="about__extra">Mis tecnologías favoritas son: HTML5, CSS3, SASS, JavaScript(ES6) y React.</p>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__intro">Abróchate el cinturón porque aquí te dejo mis mejores proyectos ;) </p>

          <div className="portfolio__items">
            <Project 
              title="Oh My plants"
              info="E-Commerce para comprar y vender plantas entre particulares."
              image="https://picsum.photos/500/300"
              tecnologies={['MongoDB','ExpressJS', 'React', 'NodeJS', 'JavaScript', 'HTML5', 'SASS']}
              github="https://github.com/robertcach/final-project-web"
              demo="https://ohmyplants.netlify.app/"
            />

            <Project 
              title="Clon de Netflix"
              info="Primo lejano de Netflix hecho con el stack MERN."
              image="https://picsum.photos/500/300"
              tecnologies={['MongoDB','ExpressJS', 'React', 'NodeJS', 'JavaScript', 'HTML5', 'SASS']}
              github="https://github.com/robertcach/netflix-react-clone-web"
              demo="https://robertcach-netflix.netlify.app/"
            />

            <Project 
              title="Ironvegan"
              info="Directorio de restaurantes veganos en Madrid."
              image="https://picsum.photos/500/300"
              tecnologies={['NodeJS', 'MongoDB', 'ExpressJS', 'Handlebars', 'JavaScript', 'HTML5', 'CSS3']}
              github="https://github.com/robertcach/ironvegan"
              demo="https://veganteam.herokuapp.com/"
            />

            <Project 
              title="Beta Need For Speed "
              info="Juego de carreras inspirado en el mítico videojuego “Need For Speed."
              image="https://picsum.photos/500/300"
              tecnologies={['Canvas', 'JavaScript', 'HTML5', 'CSS3']}
              github="https://github.com/robertcach/canvasgame"
              demo="https://robertcach.github.io/canvasgame/"
            />
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;