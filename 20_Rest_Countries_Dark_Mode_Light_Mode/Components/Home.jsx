import {React, useState} from 'react';
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const [query, Setquery] = useState("");
    const [isDark] = useOutletContext();
    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <div className="search-filter-container">
                <SearchBar Setquery={Setquery} />
                <SelectMenu />
            </div>
            <CountriesList query={query} />
        </main>
  )
}

export default Home;
