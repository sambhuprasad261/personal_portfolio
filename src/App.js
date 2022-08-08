import React from 'react'
import "./App.css"
import Header from './component/Head/Header'
import Home from './component/home_page/Home'
import Resume from './component/Resume_page/Resume.js'
import Contact from './component/Contact/Contact'
import Footer from './component/footer'
export const App = () => {
  return (
    <div>
      <Header /> 
      <Home />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
export default App