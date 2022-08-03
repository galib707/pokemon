import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Card from './Card';

function List() {
 let [allPokemons, setAllPokemons] = useState([]);
 useEffect(() => {
   fetch("https://pokeapi.co/api/v2/pokemon?Limit=20&offset=20")
   .then(resp=>resp.json())
   .then(data=> setAllPokemons(data.results)
   )
    
  // console.log(allPokemons[0].url)
 }, [])
 
  return (
   <div className="list">
        {allPokemons.map(pokemon => <Card key={pokemon.url} url = {pokemon.url}/>)}
   </div>
  )
}

export default List