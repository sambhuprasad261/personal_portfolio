import React, { useState } from "react"
import "./header.css"
const Header = () => {
  // fixed Header when scroll header at top position
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu (usta)
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <h1 className="my_portfolio">MY PORTFOLIO</h1>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home' className="home">Home</a>
              </li>
              <li>
                <a href='#resume' className="resume4">Resume</a>
              </li>
              <li>
                <a href='#resume' className="blog">Blog</a>
              </li>
              <li>
                <a href='#contact'className="contact1">Contact</a>
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