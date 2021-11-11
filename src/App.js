import './App.css';
import { useState } from 'react';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';

function App(){
  const [query,setQuery]=useState("");
  const [pokemon,setPokemon]=useState({name:"",species:"",img:"",hp:"",attack:"",defense:"",type:""});
  const [chosen,setChosen]=useState(false);
  const [flip,setFlip]=useState(false);
  const onClick= ()=>
  {
    setFlip(!flip);
  }
  const search=()=>{
    if (query!==''){
      
        axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`).then
    ((response)=>{
          
            setPokemon({name:query,species:response.data.species.name,img:response.data.sprites.front_default,hp:response.data.stats[0].base_stat,
              attack:response.data.stats[1].base_stat,defense:response.data.stats[2].base_stat,type:response.data.types[0].type.name}) ;
         
      setChosen(true);
      setFlip(false);
    })
    
      }
  }
  return(
    <div className="App">
      <div className="header">
      <h1>Welcome To Pokemon World</h1>
      <input type="text" onChange={(e)=>setQuery(e.target.value)} placeholder="Enter your pokemon"/>
      <button onClick={search}>Search</button>
      </div>
      <div className="display">
        {
          !chosen ? (<div className="entry"><h1>Search Your Favourite Pokemon</h1></div>) :
          ( <ReactCardFlip isFlipped={flip} flipDirection="vertical">
              <div className="front">
                  <img src={pokemon.img} alt={pokemon.name}/>
                  <h2>{pokemon.name}</h2>
                  <button onClick={onClick}>See More</button>
              </div>
              <div className="back" onClick={onClick}>
                  <h3>{pokemon.name}</h3>
                  <h3>species:{pokemon.species}</h3>
                  <h3>Hp:{pokemon.hp}</h3>
                  <h3>Attack: {pokemon.attack}</h3>
                  <h3>Defense: {pokemon.defense}</h3>
                  <h3>Type: {pokemon.type}</h3>
              </div>
          </ReactCardFlip>)
        }
        </div>
    </div>
  );
}

export default App;