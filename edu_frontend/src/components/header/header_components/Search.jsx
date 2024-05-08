import React from 'react'
import { CiSearch } from "react-icons/ci";

import '../../header/Header.css'

const Search = ({ modal, mode }) => {
    return (
        <div className='search_container'>
            <button
                className='search_btn'
                style={mode ?
                    { background: '#161618', color: '#92949d' }
                    : { background: '#f6f6f7', color: '#4d4d4d' }}                    
                onClick={modal}
            >
                <CiSearch style={{ marginRight: 10 }} />
                <span>Search</span>
            </button>
        </div>
    )
}

export default Search
