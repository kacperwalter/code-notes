import bckImg from '../../assets/img_hero.jpg'

import Wrapper from '../Wrapper/Wrapper'

import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
      <Wrapper>
        <h1 className='hero__heading'>Hello, we’re gtd.</h1>
      </Wrapper>
    </section>
  )
}

export default Hero