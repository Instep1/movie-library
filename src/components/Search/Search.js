import React, {useState} from "react";
import './search.scss';

const Search = ({filterName}) => {

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');
    
    const handleKey = (e) => {
        if(e.key === 'Enter') {
            filterName(search, type);
        }
      }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        filterName(search, event.target.dataset.type);
    }

        return (
            <div className="row">
                <div className="input-field">
                    <input 
                    type="search" 
                    className="validate" 
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}/>
                    <button className="btn search-btn" onClick={() => filterName(search, type)}>Search</button>
                    <div className="search__container-radio">
                        <label>
                            <input name="type" type="radio" checked={type === 'all'} data-type='all' onChange={handleFilter} />
                            <span>All</span>
                        </label>
                        <label>
                            <input name="type" type="radio" checked={type === 'movie'} data-type='movie' onChange={handleFilter} />
                            <span>Movies</span>
                        </label>
                        <label>
                            <input name="type" type="radio" checked={type === 'series'} data-type='series' onChange={handleFilter} />
                            <span>Series</span>
                        </label>
                    </div>
                </div>
            </div>
        )
}

export default Search;