import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/LLH1.png"
import ScrollDown from "../../assets/ScrollDown.png"
import HeaderSocial from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lili Huang</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="" className='scroll__down'>
          {/* <img src={ScrollDown} alt="scroll-down" /> */}
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header