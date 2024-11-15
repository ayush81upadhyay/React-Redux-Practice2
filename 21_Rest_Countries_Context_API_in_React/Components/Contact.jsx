import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const Contact = ()=> {
  const [isDark] = useContext(ThemeContext)
  return (
    <main className={`contact-container ${isDark? 'dark' : ''}`}>
      <div style={{marginLeft: 425, marginTop: 200}}>
        <h1>Developed by Ayush Upadhyay</h1>
        <h2>Contact at github@ayush81upadhyay</h2>
      </div>
    </main>
  )
}

export default Contact
