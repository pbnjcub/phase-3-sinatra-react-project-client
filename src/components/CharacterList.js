import React, { useState, useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import CharacterCard from './CharacterCard'
import {NavLink} from 'react-router-dom'

const CharacterList = ({changeBackground} ) => {
    const [ characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9393/characters')
            const data = await resp.json()
            setCharacters(data);
            setLoading(false)
        }
        fetchData()
        changeBackground(location.pathname)
    }, [])


    const characterCards = characters.map((character, index) => <CharacterCard key={index} character={character}/>)
 
    if(loading) {
        return <h1 class="white-text"><b>loading...</b></h1>
    } else {
        return (
            <div>
                <div class="row">
                    <h1 class="white-text"><b>Characters</b> </h1>
                    <div class="col s12 m6">
                        {characterCards}
                    </div>
                </div>
                <div class="row">
                    <div class="col s2 m2">
                        <NavLink to="/characters/new">
                            <a class="waves-effect waves-light btn">
                                New Character
                            </a>
                        </NavLink>     
                    </div>                
                </div>
            </div> 
        )
    }
}

export default CharacterList
