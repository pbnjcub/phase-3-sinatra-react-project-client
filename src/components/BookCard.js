import React from 'react'
import {NavLink} from 'react-router-dom'


const BookCard = ({ book }) => {
    return (
        <li>
            <NavLink to={`/books/${book.id}`} style={{color: "white"}}>
                {book.title}
            </NavLink>
        </li>
     )
}

export default BookCard