import React from 'react'
import './Resume.css'
import tehshomal from '../../assets/tehshomal.jpg'
import skill1 from '../../assets/skill1.png'
import skill2 from '../../assets/skill2.png'
import skill3 from '../../assets/skill3.png'
import skill4 from '../../assets/skill4.png'

const Resume = () => {
  return (
    <div id='resume' className='resume'>
      <div className="resume-title">
      </div>
      <div className="container">
        <div className="section">
            <h3>~ Education📚 ~</h3><br />
            <img className='img1' src={tehshomal} alt="" /><br /><br />
            <p>Bachelor of Software Engineering
               Islamic Azad University, North Tehran
               Tehran, Iran
               GPA: 16.5/20</p>
        </div>
        <hr />
        <div className="section">
            <h3>~ Development Skills✒️~</h3><br />
            <p>I am familiar and work on a daily basis with<b> HTML, CSS, JavaScript, Bootstrap</b> and other modern frameworks like <b>React.js</b></p>
            <img className='im2' src={skill1} alt="" />
            <img className='im2' src={skill2} alt="" />
            <img className='im2' src={skill3} alt="" />
            <img className='im2' src={skill4} alt="" />
        </div>
    </div>
    
      </div>
      
        
   
  )
}

export default Resume