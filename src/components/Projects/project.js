import React from 'react'
import './project.css'
import gemini from '../../assets/gemini.png'
import youtube from "../../assets/youtube.png"




const Project = () => {
    
    const handleRedirect = (url) => {
        window.open(url, '_blank'); 
      };
  return (
        <section id='projects'>
            <span className='title'>My Projects</span>
            <span className='skillDesc'>I have created multiple projects using the above mentioned technologies. I have practised much by making such user friendly projects which I have added in my GitHub repository also.</span>
            <span className='projectList'>
                <div className='firstTile'>
                <img src={gemini} alt='project' className='gemini'></img>
                
                <div className='projectDesc'>
                <h2>Gemini Clone</h2>
                <p>This is a gemini clone which is being developed using react and its principles.It is a responsive page in which the user has the phone view as well as laptop view. You can search any thing of your need.</p>

                <p onClick={() => handleRedirect('https://shubham1159.github.io/Gemini_clone/')}><i class="fa-solid fa-square-up-right"></i><i className='link'>Project Link</i></p>
                </div>
                </div>
                <div className='secondTile'>
                <div className='projectDesc2'>
                    <h2>Youtube Clone</h2>
                    <p>This is a Youtube clone which is being developed using HTML, CSS and JS. I have used the api key of youtube by which the user can search anything of their interest.</p>
                    <p onClick={() => handleRedirect('https://shubham1159.github.io/You_tube_clone/')}><i class="fa-solid fa-square-up-right"></i><i className='link'>Project Link</i></p>
                
                </div>
                <img src={youtube} alt='project' className='youtube'></img>
                
                </div>
            </span>
        </section>    
)
}

export default Project
