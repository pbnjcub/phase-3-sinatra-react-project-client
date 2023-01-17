import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import BookCard from './BookCard'

const CharacterDetail = ({changeBackground}) => {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:9393/characters/${id}`)
            const data = await resp.json()
            setCharacter(data)
            setLoading(false)
        }
        fetchData()
            .catch(console.error)

    }, [id])



    if(loading) {
        return <h1>Loading...</h1>
    } else {
        const bookCards = character.books.map((book, index) => <BookCard key={index} book = {book} character={character}/>)
        return (
            <div>
                <div class="row white-text">
                    <div class="col s6 m6">
                        <h1><b>{character.name}</b></h1>
                        <div class="col s6 m6" style={{columnGap: 100}}>
                            <a class="waves-effect waves-light btn">Delete Character</a>
                            <a class="waves-effect waves-light btn">Update Character</a>
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
    
}

export default CharacterDetail