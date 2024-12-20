import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import CountriesListShimmer from './CountriesListShimmer';

const CountriesList = ({query, queryRegion, SetCssQuery}) => {
    const [countriesData, setCountriesData] = useState([])
    
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data) => {
            setCountriesData(data)
        })
    }, [])

    if(countriesData.length==0){
        return <CountriesListShimmer/>
    }

    if(countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).length<4){
        SetCssQuery(true)
    }
    else{
        SetCssQuery(false)
    }
    
    return(
        <div className="countries-container">
        {countriesData.filter((country) => country.region.includes(queryRegion))
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => {
            return (
                <CountryCard 
                    key={country.name.common}
                    name={country.name.common}
                    flag={country.flags.svg}
                    population={country.population}
                    region={country.region}
                    capital={country.capital?.[0]}
                    data={country}
                /> 
            )   
        })}
    </div> 
    )
}

export default CountriesList
