import React, { useEffect, useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { FaTimes, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";


import './SearchModal.css'

const SearchModal = ({ closeModal, mode }) => {

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const results = json.filter((user) => {
          return value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value);
        });
        setSearchResult(results);
      })
  }
  useEffect(() => {

    fetchData();
  }, [])

  console.log(searchResult)

  const handleOnChange = (value) => {
    setSearchText(value);
    fetchData(value);

  }


  return (
    <div className="search_modal_container">
      <div className='search_modal_overlay' onClick={closeModal}></div>
      <div
        className="search_container"
        style={mode ?
          { background: '#272a2f', color: '#92949d' }
          : { background: '#f6f6f7', color: '#4d4d4d' }}
      >

        <form className='form_shell'>
          <label>
            <CiSearch />
          </label>
          <input
            type="text"
            className='search_input'
            placeholder='Search'
            value={searchText}
            onChange={(e) => handleOnChange(e.target.value)}
          />
          <div className="search_action">
            <FaTimes onClick={() => setSearchText('')} />
          </div>

        </form>

        <div className="search-keyboard-shortcuts">
          <span>
            <kbd aria-label="up arrow"><FaArrowUp /></kbd>
            {" "}
            <kbd aria-label="down arrow"><FaArrowDown /></kbd>
            {" "}
            {"to navigate"}
          </span>
          <span>
            <kbd aria-label="up arrow"><AiOutlineEnter /></kbd>
            {" "}
            {"to select"}
          </span>

        </div>

      </div>
    </div>
  )
}

export default SearchModal
