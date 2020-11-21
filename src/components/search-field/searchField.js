import React from 'react';

// STYLE
import './search.styles.css';

// ASSETS
import searchIcon from './../../assets/icons/blue-search-icon.png';


const SearchField = (props) => {
    return (
        <div className="search-content">
            <img src={searchIcon} alt="search icon" />
            <input 
                  className="search-monster-field" 
                  type="text" 
                  onChange={props.searchHandler} />
          </div>
    )
}

export default SearchField;