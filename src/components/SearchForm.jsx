import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  SearchForm.propTypes = {
    searchTerm: PropTypes.string,
  };
  const handleSearch = () => {
    navigate("/BookList", { state: { searchTerm } });
  };

  return (
    <>
      <div className='flex justify-center w-full'>
          <form >
            <div className=' flex items-center justify-center'>
              <input type = "text" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        className=' px-4 py-2 w-full p-2  outline-none  border-[1px] border-blue-700 rounded-full' placeholder='SEARCH'  />
              <button type = "submit" onClick={handleSearch} className='p-2' >
                <FaSearch className='text-[var(--sec-bg-cl)]' size = {32} />
              </button>
            </div>
          </form>
      </div>
    </>
  )
}

export default SearchForm;
