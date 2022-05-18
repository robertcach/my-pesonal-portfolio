import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__left">
          <p className="footer__copyright">Robert Cabrera © 2022</p>
        </div>
        <div className="footer__right">
          <a href="https://twitter.com/RobertCaCh_" className="footer__link" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>

          <a href="https://github.com/robertcach" className="footer__link" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>

          <a href="https://www.linkedin.com/in/robert-cabrera/" className="footer__link" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>  
        </div>
      </div>
    </footer>
  )
}

export default Footer;