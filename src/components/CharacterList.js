import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

const CharacterList = () => {
    const [ characters, setCharacters] = useState([])

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9393/characters')
            const data = await resp.json()
            setCharacters(data);
        }
        fetchData()
    }, [])

    const characterCards = characters.map((character, index) => <CharacterCard key={index} character={character}/>)
 
    return (
        <div class="row">
            <h1 class="white-text" style={{color: "white"}}><b>Characters</b></h1>
            <div class="col s12 m6">
                {characterCards}
            </div>

        </div>
    )
}

export default CharacterList
