import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
  return (
        <form className='searchbar'>
            <input type="text" 
                    placeholder='search for song or enter URL'
            /> 
            <button><AiOutlineSearch /></button>
        </form>
  )
}

export default Searchbar