import React, { useEffect, useState} from 'react'
import BookCard from './BookCard'
import { useLocation} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const BookList = ({changeBackground}) => {
    const [ books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('http://localhost:9393/books')
            const data = await resp.json()
            setBooks(data);
            setLoading(false)
        }
        fetchData()
        changeBackground(location.pathname)
    }, [])

    const bookCards = books.map((book, index) => <BookCard key={index} book={book}/>)
 
    if(loading) {
        return <h1 class="white-text"><b>loading...</b></h1>
    } else {
        return (
            <div>
                <div class="row">
                    <h1 class="white-text"><b>Books</b></h1>
                    <div class="col s12 m6">
                        {bookCards}
                    </div>
                </div>
                <div class="row">
                    <div class="col s2 m2">
                        <NavLink to="/books/new">
                            <a class="waves-effect waves-light btn">
                                New Book
                            </a>
                        </NavLink>     
                    </div>                
                </div>
            </div>
        )
    }
    
}

export default BookList