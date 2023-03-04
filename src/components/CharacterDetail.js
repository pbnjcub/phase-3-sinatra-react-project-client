import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import BookCard from './BookCard'

const CharacterDetail = ({characters, removeCharacter}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const character = characters.find(character => character.id === parseInt(id))

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const resp = await fetch(`http://localhost:9393/characters/${id}`)
    //         const data = await resp.json()
    //         setCharacter(data)
    //         setLoading(false)
    //     }
    //     fetchData()
    //         .catch(console.error)

    // }, [id])

    const deleteCharacter = async id => {
        const resp = await fetch(`http://localhost:9393/characters/${id}`, {
            method: 'DELETE',
        });
        const data = await resp.json()
        removeCharacter(data)

    }



    const bookCards = character.books.map((book, index) => <BookCard key={index} book = {book} character={character}/>)
    return (
        <div>
            <div class="row white-text">
                <div class="col s6 m6">
                    <h1><b>{character.name}</b></h1>
                    <div class="col s6 m6" style={{columnGap: 100}}>
                        <a class="waves-effect waves-light btn" onClick={() => {deleteCharacter(character.id); navigate("/characters")}}>Delete Character</a>
                        <NavLink to={`/characters/${character.id}/edit`}>
                            <button class="waves-effect waves-light btn">Update Character</button>
                        </NavLink>
                    </div> 
                </div>
            </div> 
            <div class="row white-text">

                <div>
                    <span style={{ fontWeight: 'bold' }}>Description: </span> {character.description}
                    <br />
                    <span style={{ fontWeight: 'bold' }}>Affiliation: </span> {character.location}
                    <br />
                    <h2>Books Featured in:</h2>
                    { bookCards }
                </div>
            </div>
        </div>
        )
}
    


export default CharacterDetail