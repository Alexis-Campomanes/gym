import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Calories from '../../assets/calories.png'
import Hero_image from '../../assets/hero_image.png'
import Hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import { motion } from 'framer-motion'

const Hero = () => {
    const transition = {type: 'spring', duration : 3}
  return (
    <div className='hero'>
      <div className="blur hero-blur"></div>
      <div className='left-h'>
          <Header />
{/* the best ad */}
          <div className='the-best-ad'>
            <motion.div
            initial = {{ left:'238px' }}
            whileInView = {{ left:'8px' }}
            transition ={ transition }
            ></motion.div>
            <span>the best fitnes club in the town</span>
          </div> 
          {/* heading */}
          <div className='hero-text'>
            <div>
              <span className='stroke-text'>shape  </span>
              <span>your</span>
            </div>
            <div>
              <span>ideal body</span>
            </div>
            <div>
              <span>
              In here we will help you to shape and build your idela body and live up you life to fullest
              </span>
            </div>
          </div>
          {/* figures */}
          <div className='figures'>
            <div>
              <span>+140</span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span>menbers joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitnes programs</span>
            </div>
          </div>
          {/* hero buttones */}
          <div className='hero-buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <motion.div
          initial= {{ right: '1rem' }}
          whileInView = {{ right: '4rem'}}
          transition = { transition }
          className='heart-rate'>
          <img src={ Heart } alt='' />
          <span>Heart Rate</span>
          <span>116bpm</span>
          </motion.div>
        {/** hero imagenes */}
          <img src={ Hero_image } alt='' className='hero-image' />
          <motion.img
          initial = {{right: '20rem'}}
          whileInView = {{ right: '29rem'}}
          transition = { transition }
          src={ Hero_image_back } alt='' className='hero-image-back' />
        {/* calories */}
        <motion.div
          initial= {{ right: '37rem' }}
          whileInView = {{ right: '58rem'}}
          transition = {transition}
          className='calories'>
          <img src={ Calories } alt='' />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
