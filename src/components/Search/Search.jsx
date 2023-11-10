import useDebounce from '../../hooks/useDebounce'
import './Search.css'

function Search({updateSearchTerm}){

    const debounceUpdateSearch=useDebounce((e)=>updateSearchTerm(e.target.value))
    return(


        <input id="search-pokemon"type= "text"
         placeholder='Which Pokemon you are looking for ? ..'
        onChange={debounceUpdateSearch}
        ></input>
    )
}

export default Search