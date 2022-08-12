import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Calories from '../../assets/calories.png'
import Hero_image from '../../assets/hero_image.png'
import Hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
          <Header />
{/* the best ad */}
          <div className='the-best-ad'>
            <div></div>
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
        <div className='heart-rate'>
          <img src={ Heart } alt='' />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </div>
        {/** hero imagenes */}
          <img src={ Hero_image } alt='' className='hero-image' />
          <img src={ Hero_image_back } alt='' className='hero-image-back' />
        {/* calories */}
        <div className='calories'>
          <img src={ Calories } alt='' />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
