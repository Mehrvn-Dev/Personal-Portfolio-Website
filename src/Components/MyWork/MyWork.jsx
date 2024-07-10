import React from 'react'
import './MyWork.css'
import projects from '../../assets/projects.png'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <hr/>
            <br/>
            <p>Projects will be placed in this section soon.</p>

        </div>
        <div className="mywork-container">
           <img src={projects} alt="" />


        </div>
    </div>
  
  )
}

export default MyWork