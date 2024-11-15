import React from 'react'
import './CountriesListShimmer.css'

const CountriesListShimmer = () => {
  return (
    <div className="countries-container">
        {Array.from({length:10}).map((el, i)=>{
            return <div className="country-card shimmer-card" key={i}></div>
        })}
    </div>
  )
}

export default CountriesListShimmer