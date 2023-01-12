import React from 'react'
import {NavLink} from 'react-router-dom'


const BookCard = ({ book }) => {
    return (
        <li>
            <NavLink to={`/books/${book.id}`}>
                {book.title}
            </NavLink> - Type of Book: {book.type_of_book}
        </li>
     )
}

export default BookCard