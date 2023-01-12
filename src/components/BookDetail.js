import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import CharacterCard from './CharacterCard'

const BookDetail = () => {
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:9393/books/${id}`)
            const data = await resp.json()
            console.log(data)
            setBook(data)
            setLoading(false)
        }
        fetchData()
            .catch(console.error)
    }, [])


    if(loading) {
        return <h1>Loading...</h1>
    } else {
        const characterCards = book.characters.map((character, index) => <CharacterCard key={index} character = {character} book={book}/>)
        
        // const bookData = book.map((key) => {
        //     <span style={{ fontWeight: 'bold' }}> `${key}:` </span>
        // })
        
        return (
            <div>
                <h1>{book.title}</h1>
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
         )
    }
    
}

export default BookDetail