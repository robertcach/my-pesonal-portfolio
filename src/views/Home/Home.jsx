import './Home.scss'

const Home = () => {
  return (
    <>
      <section className="header">

      </section>

      <section className="about wrapper">
        <div className="about__left">
          <img src="" alt="about me" />
        </div>
        <div className="about__right">
          <h2>Sobre mí</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </div>
      </section>

      <section className="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title">Portfolio</h2>
          <p className="portfolio__intro">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quae, illo excepturi cum commodi quisquam similique vel aut temporibus, tenetur atque ullam. Aliquam dolores cupiditate, quod est minima a quidem.</p>
        </div>
      </section>
    </>
  )
}

export default Home;