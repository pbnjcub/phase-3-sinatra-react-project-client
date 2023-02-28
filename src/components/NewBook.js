import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation} from 'react-router-dom'

const NewBook = ({changeBackground, setBooks}) => {
    
    const [newBook, setNewBook] = useState({
        title: "",
        year_published: "",
        book_num: "",
        num_pages: "",
        isbn: "",
        award_id: "",
        description: "",
        type_of_book: ""
    })
    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        changeBackground(location.pathname)
    }, [location.pathname, changeBackground])


    function handleChange(e) {
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value,
        })

    }

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = newBook
        const options = {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch('http://localhost:9393/books', options)
        const data = await resp.json()
        setBooks(data)
        //redirect
        navigate('/books')
    }

    return (
        <div>
            <h1 class="white-text">Add a New Book Here</h1>
            <form class="col s12" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col s6 white-text">
                        Book Title:
                        <div class="input-field inline">
                            <input class="validate white-text" name="title" id="title" type="text" value={newBook.title} onChange={handleChange} autoFocus={true}/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        Year Published:
                        <div class="input-field inline">
                            <input class="validate white-text" name="year_published" id="year_published" type="text" value={newBook.year} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col s6 white-text">
                        Book Number:
                        <div class="input field-inline">
                            <input class="validate white-text" name="book_num" id="book_num" type="text" value={newBook.book_num} onChange={handleChange}/>
                        </div>
                    </div>                   
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        Type of Book:
                        <div class="input field-inline">
                            <input class="validate white-text" name="type_of_book" id="type_of_book" type="text" value={newBook.type} onChange={handleChange}/>
                        </div>
                    </div>                  
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        Number of Pages:
                        <div class="input field-inline">
                            <input class="validate white-text" name="num_pages" id="num_pages" type="text" value={newBook.pages} onChange={handleChange}/>
                        </div>
                    </div>                   
                </div>
                <div class="row">
                    <div class="col s6 white-text">
                        ISBN:
                        <div class="input field-inline">
                            <input class="validate white-text" name="isbn" id="isbn" type="text" value={newBook.isbn} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 white-text">
                        Description:
                        <textarea class="materialize-textarea white-text" name="description" id="description" value={newBook.description} onChange={handleChange}/>
                    </div>
                </div>
                <br />
                <input class="waves-effect waves-light btn" type="submit" value="Create Book"/>
            </form>
        </div>
    )
}

export default NewBook