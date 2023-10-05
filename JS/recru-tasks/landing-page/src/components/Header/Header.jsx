import './Header.scss'

import logo from '../../assets/gtd_logo.png'

import Wrapper from '../Wrapper/Wrapper'

const Header = () => {
  return (
    <header className='header'>
      <Wrapper>
        <img src={logo} alt="Logo of gtd. company" />
      </Wrapper>
    </header>
  )
}

export default Header