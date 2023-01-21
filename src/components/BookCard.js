import React from 'react'
import {NavLink} from 'react-router-dom'


const BookCard = ({ book, books, setBooks }) => {
    return (
        <li>
            <NavLink style={{color: "white"}} to={`/books/${book.id}`} state={{books: books, setBooks: setBooks}}>
                {book.title}
            </NavLink>
        </li>
     )
}

export default BookCard