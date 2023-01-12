import React, { useEffect, useState} from 'react'
import BookCard from './BookCard'

const BookList = () => {
    const [ books, setBooks] = useState([])

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9393/books')
            const data = await resp.json()
            setBooks(data);
        }
        fetchData()
    }, [])

    const bookCards = books.map((book, index) => <BookCard key={index} book={book}/>)
 
    return (
        <div>
            <h1 class="blue-text text-darken-2">Books</h1>
            <div class="col s12 m6">
                {bookCards}
            </div>
        </div>
    )
}

export default BookList