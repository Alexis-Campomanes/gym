import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

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
              in here we will help you to shape and build your idela body and live up you life to fullest
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
      <div className='right-h'>right side</div>
    </div>
  )
}

export default Hero
