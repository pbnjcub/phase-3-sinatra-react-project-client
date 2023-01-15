import React, { useState, useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import CharacterCard from './CharacterCard'

const CharacterList = ({changeBackground} ) => {
    const [ characters, setCharacters] = useState([])
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9393/characters')
            const data = await resp.json()
            setCharacters(data);
        }
        fetchData()
        changeBackground(location.pathname)
    }, [])


    const characterCards = characters.map((character, index) => <CharacterCard key={index} character={character}/>)
 
    return (
        <div class="row">
            <h1 class="white-text"><b>Characters</b> </h1>
            <div class="col s12 m6">
                {characterCards}
            </div>

        </div>
    )
}

export default CharacterList
