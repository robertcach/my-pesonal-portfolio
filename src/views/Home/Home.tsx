import Project from '../../components/Project/Project';
/* import Car from '../../assets/images/MacBook-Pro-16.png'; */
import './Home.scss'
const car =  require("../../assets/images/need-for-speed-project.png");
const plants = require("../../assets/images/oh-my-plants-project.png");
const netflix = require("../../assets/images/netflix-clone-project.png");
const ironvegan = require("../../assets/images/ironvegan-project.png");
const Home = () => {

  
  return (
    <main>
      <section className="header">
        <div className="wrapper">
          <h1 className="header__title">DESARROLLADOR FRONTEND &<br />DISEÑADOR.</h1>
        </div>
      </section>

      <section className="about wrapper" id="about">
        <div className="about__left">
            <p className="about__technology">HTML</p>
            <p className="about__technology">CSS</p>
            <p className="about__technology">SASS</p>
            <p className="about__technology">JavaScript</p>
            <p className="about__technology">React</p>

        </div>
        <div className="about__right">
          <h2 className="about__title">Friki. Seriéfilo.<br />
            Amante de los comics.</h2>

          <p className="about__info">Me llamo Robert y después de 8 años dedicándome al sector <strong>creativo</strong>, he decidido darle protagonismo al lado izquierdo del cerebro. Sí, ese del que dicen que prima la <strong>lógica</strong>. En otras palabras, ahora soy <strong>desarrollador Frontend</strong>.</p>
          
          <p className="about__extra">También me divierto diseñando en Figma, Photoshop e Illustrator.</p>
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
              image={plants}
              tecnologies={['MongoDB','ExpressJS', 'React', 'NodeJS', 'JavaScript', 'HTML5', 'SASS']}
              github="https://github.com/robertcach/final-project-web"
              demo="https://ohmyplants.netlify.app/"
            />

            <Project 
              title="Clon de Netflix"
              info="Primo lejano de Netflix hecho con el stack MERN."
              image={netflix}
              tecnologies={['MongoDB','ExpressJS', 'React', 'NodeJS', 'JavaScript', 'HTML5', 'SASS']}
              github="https://github.com/robertcach/netflix-react-clone-web"
              demo="https://robertcach-netflix.netlify.app/"
            />

            <Project 
              title="Ironvegan"
              info="Directorio de restaurantes veganos en Madrid."
              image={ironvegan}
              tecnologies={['NodeJS', 'MongoDB', 'ExpressJS', 'Handlebars', 'JavaScript', 'HTML5', 'CSS3']}
              github="https://github.com/robertcach/ironvegan"
              demo="https://veganteam.herokuapp.com/"
            />

            <Project 
              title="Beta Need For Speed"
              info="Juego de carreras inspirado en el mítico videojuego “Need For Speed."
              image={car}
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