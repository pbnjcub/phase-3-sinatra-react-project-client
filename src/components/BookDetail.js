import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import CharacterCard from './CharacterCard'

const BookDetail = () => {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:9393/books/${id}`)
            const data = await resp.json()
            setBook(data)
            setLoading(false)
        }
        fetchData()
            .catch(console.error)
    }, [id])


    if(loading) {
        return <h1>Loading...</h1>
    } else {
        const characterCards = book.characters.map((character, index) => <CharacterCard key={index} character = {character} book={book}/>)
        
        return (
            <div>
                <div class="row white-text">
                    <div class="col s6 m6">
                        <h1>{book.title}</h1>
                        <div class="col s6 m6">
                            <a class="waves-effect waves-light btn">Delete Book</a>
                            <a class="waves-effect waves-light btn">Update Book</a>
                        </div> 
                    </div>
                </div> 
                <div class="row white-text">
                    <div class="col s6 m6">
                        <span style={{ fontWeight: 'bold' }}>Year Published: </span> {book.year_published}
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Book Number: </span> {book.book_num}
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Number of Pages: </span> {book.num_pages}
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Book Type: </span> {book.type_of_book}
                        <br />
                        <span style={{ fontWeight: 'bold' }}>Description: </span> {book.description}
                        <br />
                        <h2>Featured Characters</h2>
                        { characterCards }
                    </div>
                </div>
                <div class="row">
                    <div class="col s2 m2">
                        <NavLink to={`/books/${book.id}/characters/new`}>
                            <a class="waves-effect waves-light btn">
                                Add Character to Book
                            </a>
                        </NavLink>
                    </div>                
                </div>
         </div>
         )
    }
    
}

export default BookDetail