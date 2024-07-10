import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.jpg'
const About = () => {
  return (
    <div id='aboutme' className='about'>
             <div className="box2">
              <img className='prof_img' src={profile_img} alt="" />
             </div>

             <div className="box2"><br /><br /><br />
             <h1>About me</h1>
              <p className='p-justify'>Enthusiastic web developer with skills in JavaScript, HTML, CSS, and Bootstrap
                , eager to apply them in a dynamic team environment.
                Passion for creating seamless user interfaces and interactive web designs using modern web technologies.</p>
                <p>
                <b>Date of birth:</b> 13-10-1998<br />
                <b>Gender:</b> Male<br />
                <b>Nationality:</b> Iranian<br />
                <b>Address:</b> Tehran,Iran<br />
                <b>📞 Phone:</b> +989369101128
                </p>
                <div className="hero-resume">🔗Download Cv</div>
                  
          </div>
          

    
       
        
        
       </div>
   
  )
}

export default About