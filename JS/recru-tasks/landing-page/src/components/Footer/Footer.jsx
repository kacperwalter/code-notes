import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='wrapper'>
        <ul className='footer__content'>
          <li className='footer__element'>
            <h3 className='footer__header'>Team</h3>
            <ul className='footer__links'>
              <li><a href='#'><h4>Lisa</h4></a></li>
              <li><a href='#'><h4>Danielle</h4></a></li>
              <li><a href='#'><h4>Brian</h4></a></li>
              <li><a href='#'><h4>Join us!</h4></a></li>
            </ul>
          </li>
          <li className='footer__element'>
            <h3 className='footer__header'>Learn More</h3>
            <ul className='footer__links'>
              <li><a href='#'><h4>Manifesto</h4></a></li>
              <li><a href='#'><h4>Works</h4></a></li>
              <li><a href='#'><h4>Stories</h4></a></li>
            </ul>
          </li>
          <li className='footer__element'>
            <h3 className='footer__header'>Meet Us</h3>
            <ul className='footer__links'>
              <li><a href='#'><h4>Studio</h4></a></li>
              <li><a href='#'><h4>Community</h4></a></li>
              <li><a href='#'><h4>Workshops</h4></a></li>
            </ul>
          </li>
          <li className='footer__element'>
            <h3 className='footer__header'>Contact</h3>
            <ul className='footer__links'>
              <li><a href='#'><h4>Twitter</h4></a></li>
              <li><a href='#'><h4>Facebook</h4></a></li>
              <li><a href='#'><h4>Instagram</h4></a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer