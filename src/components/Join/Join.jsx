
import './Join.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();/**/ 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_b7uspnr', 'template_rnwonhn', form.current, 'f4U_Wr8VnobciVsYl')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className='stroke-text'>with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form className='email-container' ref={form} onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your Email address'/>
          <button type='submit' className='btn btn-j'>Join Now</button>
        </form>
      </div>
    
    </div>
  )
}

export default Join
