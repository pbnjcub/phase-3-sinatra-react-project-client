import React from 'react'
import {NavLink} from 'react-router-dom'


const CharacterCard = ({ character, setCharacters, characters }) => {
    
    return (

        <li>
            <NavLink to={`/characters/${character.id}`} state={{characters: characters, setCharacters: setCharacters}} style={{color: "white"}}>
                {character.name}
            </NavLink>
        </li>
            
     )
}

export default CharacterCard
