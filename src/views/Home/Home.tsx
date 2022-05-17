import Project from '../../components/Project/Project';
import { useState } from 'react';
import './Home.scss'

const Home = () => {
  const [number, setNumber] = useState<number>(5)

  const changeNumber = () => {
    setNumber(number + 1)
  }
  
  return (
    <main>
      <section className="header">
        <h1 className="header__title">FRONTEND DEVELOPER &<br />WEB DESIGNER.</h1>
      </section>

      <p>{number}</p>
      <button onClick={changeNumber}>Change</button>

      <section className="about wrapper">
        <div className="about__left">
          <img src="https://picsum.photos/500/400?grayscale" alt="about me" />
        </div>
        <div className="about__right">
          <h2>Sobre mí</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__intro">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique vel aut temporibus, tenetur atque ullam. Aliquam dolores cupiditate, quod est minima a quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique.</p>

          <div className="portfolio__items">
            <Project 
              title="Pepito"
              info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique vel aut temporibus."
              image="https://picsum.photos/500/300"
              tecnologies={['Html', 'scss', 'React']}
              github="/"
              demo="/"
            />

            <Project 
              title="Pepito"
              info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique vel aut temporibus."
              image="https://picsum.photos/500/300"
              tecnologies={['Html', 'scss', 'JavaScript']}
              github="/"
              demo="/"
            />

            <Project 
              title="Pepito"
              info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique vel aut temporibus."
              image="https://picsum.photos/500/300"
              tecnologies={['Html', 'scss']}
              github="/"
              demo="/"
            />

            <Project 
              title="Pepito"
              info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique vel aut temporibus."
              image="https://picsum.photos/500/300"
              tecnologies={['Html', 'scss', 'NodeJS']}
              github="/"
              demo="/"
            />
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;