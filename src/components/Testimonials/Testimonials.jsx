import React from 'react'
import { useState } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { testimonialsData } from '../../data/testimonialsData'

const Testimonials = () => {

    const [Selected, setSelected] = useState(0);
    const tLength = testimonialsData.length

  return (
    <div className='Testimonials'>
      <div className="left-t">
        <span>testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <span>
          { testimonialsData[Selected].review }
        </span>
        <span>
          <span style={{ color:'var(--orange)'}}>
            { testimonialsData[Selected].name }
          </span>
            - { testimonialsData[Selected].status  }
        </span>
      </div>

      <div className="right-t">
        <div></div>
        <div></div>
        <img src={ testimonialsData[Selected].image } alt="" />
        <div className='arrows'>
          <img
            onClick={()=>{
              Selected ===0
              ? setSelected (tLength - 1)
              : setSelected ((prev) => prev -1);
            }}
           src={ leftArrow } alt="" />
          <img 
            onClick={() =>{
              Selected === tLength-1
              ? setSelected (0)
              : setSelected ((prev) => prev +1);

            }}
          src= { rightArrow } alt="" />
        </div>
      </div>  
      
    </div>
  )
}

export default Testimonials
