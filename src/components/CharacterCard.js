import React from 'react'
import {NavLink} from 'react-router-dom'


const CharacterCard = ({ character }) => {
    
    return (

        <li>
            <NavLink to={`/characters/${character.id}`} style={{color: "white"}}>
                {character.name}
            </NavLink>
        </li>
            
     )
}

export default CharacterCard