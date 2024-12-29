import React from 'react'
import './skills.css'
import html from '../../assets/html.webp'
import css from '../../assets/CSS-Logo-2011.png'
import js from '../../assets/JavaScript-Logo.png'
import rrect from '../../assets/React.png'
import java from '../../assets/java1.png'
import database from '../../assets/databse.png'


const Skills = () => {
  return (
    <section id='skills'>
      <span className='title'>My Skills</span>
      <span className='skillDesc'>I am a full stack developer with a skills in creating dynamic and user friendly web pages. I have worked with the following technologies.</span>
      <div className='skillBars'>
        <div className='skillBar'>
        <img src={html} alt='html' className='html'/>
        <div className='skillTextHtml'>
        <h2>HTML</h2>
        <p>Having an experince working with html.</p>
      </div>
      </div>
        <div className='skillBar'>
        <img src={css} alt='css' className='css'/>
        <div className='skillTextCss'>
        <h2>CSS</h2>
        <p>Having an experince working with css.</p>
      </div>
      </div>
        <div className='skillBar'>
        <img src={js} alt='js' className='js'/>
        <div className='skillTextJs'>
        <h2>JavaScript</h2>
        <p>Having an experince working with js.</p>
      </div>
      </div>
        <div className='skillBar'>
        <img src={rrect} alt='react' className='react'/>
        <div className='skillTextReact'>
        <h2>React</h2>
        <p>Having an experince working with React.</p>
      </div>
      </div>
        <div className='skillBar'>
        <img src={java} alt='java' className='java'/>
        <div className='skillTextJava'>
        <h2>Java</h2>
        <p>Having an experince working with Java, practised the opps concept.</p>
      </div>
      </div>
        <div className='skillBar'>
        <img src={database} alt='database' className='database'/>
        <div className='skillTextData'>
        <h2>MySql / PostgreSql</h2>
        <p>Having an experince working with MySql and PostgreSql.</p>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Skills
