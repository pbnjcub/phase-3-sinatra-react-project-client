import React from 'react'
import {NavLink} from 'react-router-dom'


const BookCard = ({ book }) => {
    return (
        <li>
            <NavLink style={{color: "white"}} to={`/books/${book.id}`}>
                {book.title}
            </NavLink>
        </li>
     )
}

export default BookCard