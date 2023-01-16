import React, { useEffect, useState} from 'react'
import BookCard from './BookCard'
import { useLocation} from 'react-router-dom'

const BookList = ({changeBackground}) => {
    const [ books, setBooks] = useState([])
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9393/books')
            const data = await resp.json()
            setBooks(data);
        }
        fetchData()
        changeBackground(location.pathname)
    }, [])

    const bookCards = books.map((book, index) => <BookCard key={index} book={book}/>)
 
    return (
        <div>
            <h1 class="white-text"><b>Books</b></h1>
            <div class="col s12 m6">
                {bookCards}
            </div>
        </div>
    )
}

export default BookList