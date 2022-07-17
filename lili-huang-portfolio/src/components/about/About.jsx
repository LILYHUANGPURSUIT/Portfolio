import React from 'react'
import "./about.css"
import ME from "../../assets/LLH1.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>100+ Wordwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident aut eaque quas atque laborum, optio blanditiis sequi nesciunt consectetur cum dolorem ab assumenda libero quos officiis, magnam illo esse. Ipsum?
          </p>

          <a href="#contact" className='btn bt-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About