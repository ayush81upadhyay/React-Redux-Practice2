import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Contact = ()=> {
  const [isDark] = useOutletContext()
  return (
    <main style={{marginLeft: 425, marginTop: 200}} className={`${isDark? 'dark' : ''}`}>
        <h1>Developed by Ayush Upadhyay</h1>
        <h2>Contact at github@ayush81upadhyay</h2>
    </main>
  )
}

export default Contact
