import React from 'react'
import './Reasons.css'
import imagen1 from '../../assets/image1.png'
import imagen2 from '../../assets/image2.png'
import imagen3 from '../../assets/image3.png'
import imagen4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'

const Popeye = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-r">
        <img src={ imagen1 } alt="" />
        <img src={ imagen2 } alt="" />
        <img src={ imagen3 } alt="" />
        <img src={ imagen4 } alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
          <div>
            <span className='stroke-text'>why </span>
            <span>choose us?</span>
          </div>

          <div className='details-r'>
            <div>
              <img src={ tick } alt="" />
              <span>over 140+ expert coachs</span>
            </div>
            <div>
              <img src= { tick } alt="" />
              <span>train smarter and faster than before</span>
            </div>
          <div>
            <img src= { tick } alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={ tick } alt="" />
            <span>reliable partners</span>
            </div>
          </div>
          <span style={{
            color:"var(--gray)",
            fontWeight:"normal",
          }}
          >our partners
          </span>
          <div className="partners">
            <img src={ nb } alt="" />
            <img src={ adidas } alt="" />
            <img src={ nike } alt="" />
          </div>
      </div>
      
    </div>
  )
}

export default Popeye
