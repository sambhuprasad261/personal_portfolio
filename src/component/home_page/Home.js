import React from "react"
import "./Home.css"
import photo from "../pic/sambhu1.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PORTFOLIO</h3>
            <h1>
              Hi, I'm <span>SAMBHU PRASAD</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Web developer.", " Enthusiastic Coder."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={photo} alt='myPhoto' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home