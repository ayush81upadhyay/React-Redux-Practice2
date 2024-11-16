import {React, useState} from 'react';
import SearchBar from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import { useTheme } from '../hooks/useTheme';

const Home = () => {
    const [query, Setquery] = useState("");
    const [cssquery, SetCssQuery] = useState(false)
    const [queryRegion, SetQueryRegion] = useState("")
    const [isDark] = useTheme()
    
    return (
        <main className={`${isDark ? 'dark' : ''} ${cssquery? 'search-adjustment' : ''}`}>
            <div className="search-filter-container">
                <SearchBar Setquery={Setquery} />
                <SelectMenu SetQueryRegion={SetQueryRegion}/>
            </div>
            <CountriesList query={query} queryRegion={queryRegion} SetCssQuery={SetCssQuery}/>
        </main>
  )
}

export default Home;