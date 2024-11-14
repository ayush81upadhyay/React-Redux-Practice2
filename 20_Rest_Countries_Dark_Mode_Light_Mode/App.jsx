import React, { useState } from "react";
import Header from './Components/Header'
import './App.css'
import { Outlet } from "react-router-dom";

const App = () => {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return ( 
        <>
            <Header theme={[isDark, setIsDark]}/>
            <Outlet context={[isDark, setIsDark]}/>
        </>     
    )
}

export default App;