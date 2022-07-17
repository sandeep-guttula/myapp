import React from 'react'
import './about.css'
import ME from "../../assets/me-black.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <artical className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </artical>
            <artical className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </artical>
            <artical className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Complete</small>
            </artical>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, hic natus dicta ex ratione incidunt, obcaecati officiis nostrum rem tempore veritatis tenetur eligendi odio, quas iste adipisci. Harum, deserunt ab.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About