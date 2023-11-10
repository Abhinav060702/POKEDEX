import './PokemonDetails.css'

import { Link} from 'react-router-dom';
import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';

function PokemonDetails({pokemonName}){

    const [pokemon,pokemonListState]=usePokemon(pokemonName);
    return(
        <>
        <h1 className='pokedex-redirect'>
            <Link className="pokedex-link"to='/'>
            Back To Pokedex
            </Link>
            </h1>
       {pokemon &&
        <div className='pokemon-details-wrapper'>
            <div className='pokemon-name-details'>
              {pokemon.name}
            </div> 

            <div className='pokemon-image'>
                <img src={pokemon.image} />
            </div>

            <div  className='pokemon-height'>
            <div>
               height:{pokemon.height}
            </div>

            <div>
            weight:{pokemon.weight}
            </div>

            </div>
            
            <div className='pokemon-type'>

            <h1>Type:</h1>{pokemon.types.map(t=><span className="type" key={t.type.name}>{t.type.name}</span>)}

            </div>
        </div>
}   
    <div className='similar-pokemons'>
    <h2> Some Similar Pokemons:</h2>
    <div className='pokemon-similar-boxes'>
    {
    pokemonListState.pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image}  id={pokemon.id}/>)}
    
    </div>
    </div>
    
        </>
    )
}

export default PokemonDetails;