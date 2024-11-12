import React, { useState } from "react";
import Header from './Components/Header'
import './App.css'
import { Outlet } from "react-router-dom";

const App = () => {
    return ( 
        <>
            <Header />
            <Outlet />
        </>     
    )
}

export default App;