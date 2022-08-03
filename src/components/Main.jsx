import React from 'react'
import List from './List'

function Main() {
  return (
    <div className='main'>
       <div className="navbar">
        Pokemon
       </div>
       <div className="pokemon_container">
        <List/>
       </div>
    </div>
  )
}

export default Main