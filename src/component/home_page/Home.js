import React from "react"
import "./Home.css"
import hero from "../pic/sambhu1.png"
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
            {/* <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a href="https://www.facebook.com/sambhu.prasad.547389/" target={"_blank"}>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a>
                <a href="https://github.com/sambhuprasad261" target={"_blank"}>
                  <button className='btn_shadow'>
                    <i class='fab fa-github'></i>
                  </button></a>
                  <a href="https://www.linkedin.com/in/sambhu-prasad-25310b244/" target={'_blank'}>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='myPhoto' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home