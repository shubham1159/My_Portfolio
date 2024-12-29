import React from 'react'
import './intro.css'
import photo from '../../../assets/photo.png'



const Intro = () => {
  return (
    <div>
     <section id='intro'>
        <div className='leftPart'>
            <span className='hello'>Hello,<br/></span>
            <span className='text'>I'm <span className='name'>Shubham</span><br/>Web Developer</span>
            <p className='introPart'>I am a skilled web developer with experence <br/>in creating dynamic and user-friendly web pages.</p>
            
            
        </div>
        <img src={photo} alt='profilePic'></img>
          
        
     </section>

    </div>
  )
}

export default Intro
