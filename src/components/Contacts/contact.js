import React,{useRef}from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import git from '../../assets/git.webp'
import linkdin from '../../assets/linkdin.png'
import insta from '../../assets/insta.webp'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vlnyela', 'template_3vbdb5a', form.current, {
        publicKey: '5lL6t4l_ZBoDgrGH-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleRedirect = (url) => {
    window.open(url, '_blank'); 
  };
  return (
    <section className='contactPage'>
      <div id='title'>
        <h1>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input type='text' className='names' placeholder='Your Name' name="from_name"></input>
            <input type='email' className='email' placeholder='Your Email' name="from_email"></input>
            <textarea className='msg' name='message' placeholder='Your Message' rows={5}></textarea>
            <button type='submit' className='submitBtn' value='Send'>Submit</button>
            
        </form>

        <div className='socialMedia'>
          
          <img src={git} alt='git' className='git' onClick={() => handleRedirect('https://github.com/shubham1159')}></img>
          <img src={linkdin} alt='linkdin' className='linkdin' onClick={() => handleRedirect('https://www.linkedin.com/in/shubham-kumar-9b8112229/')}></img>
          <img src={insta} alt='insta' className='insta' onClick={() => handleRedirect('https://www.instagram.com/_shubham_1159/')}></img>
        </div>
      </div>
    </section>
  )
}

export default Contact
