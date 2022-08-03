import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Card(props) {
  // console.log(props.url)
 let [pokemon, setPokemon] = useState(null);
useEffect(() => {
  fetch(props.url)
  .then(resp => resp.json())
  .then(data => setPokemon(data))


 
}, [])


  return (
    <div className="card">
        {
            pokemon !== null && (
                <>
                <p className="na">{pokemon.name}</p>
                <div className="image">
                    <img src= {pokemon.sprites.other["official-artwork"].front_default} alt="" />
                </div>
                 <p className="type">Type: {pokemon.types[0].type.name}</p>
                </>
            )
        }
    </div>
  )
}

export default Card