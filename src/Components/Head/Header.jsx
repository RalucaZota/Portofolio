import React, { useState } from "react"
import "./Header.css"


const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <p>LOGO</p>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li>
                <a href='#home'>HOME</a>
              </li>
              <li>
                <a href='#skills'>SKILLS</a>
              </li>
              <li>
                <a href='#resume'>Work Experience</a>
              </li>
              <li>
                <a href='#resume'>EDUCATION</a>
              </li>
              <li>
                <a href='#project'>PROJECTS</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <button className='home-btn'>HIRE ME</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header