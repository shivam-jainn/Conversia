import React from 'react'
import './Searchbar.css'
const Searchbar = () => {
  return (
        <form className='searchbar'>
            <input type="text" 
                    placeholder='search for song or enter URL'
            /> 
        </form>
  )
}

export default Searchbar