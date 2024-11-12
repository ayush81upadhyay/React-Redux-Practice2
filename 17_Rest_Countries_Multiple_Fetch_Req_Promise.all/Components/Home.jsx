import {React, useState} from 'react';
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';

const Home = () => {
    const [query, Setquery] = useState("");
    return (
        <main>
            <div className="search-filter-container">
                <SearchBar Setquery={Setquery} />
                <SelectMenu />
            </div>
            <CountriesList query={query} />
        </main>
  )
}

export default Home;
