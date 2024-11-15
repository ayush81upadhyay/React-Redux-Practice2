import {React, useContext, useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import ThemeContext from '../contexts/ThemeContext';
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {
    const [query, Setquery] = useState("");
    const [isDark] = useContext(ThemeContext)
    const windowsSize = useWindowSize()
    
    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar Setquery={Setquery} />
                <SelectMenu />
            </div>
            <h1 style={{textAlign:'center'}}>{windowsSize.width}X{windowsSize.height}</h1>
            <CountriesList query={query} />
        </main>
  )
}

export default Home;
