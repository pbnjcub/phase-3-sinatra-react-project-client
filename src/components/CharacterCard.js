import React from 'react'
import {NavLink} from 'react-router-dom'


const CharacterCard = ({ character }) => {
    
    return (

        <li>
            <NavLink style={{color: "white"}} to={`/characters/${character.id}`} >
                {character.name}
            </NavLink>

        </li>
            
     )
}

export default CharacterCard
