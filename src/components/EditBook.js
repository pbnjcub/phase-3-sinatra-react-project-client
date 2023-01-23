import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditBook = ({changeBackground}) => {
    const [book, setBook] = useState("")
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [updatedBook, setUpdatedBook] = useState({
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
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:9393/books/${id}`)
            const data = await resp.json()
            setBook(data)
            setUpdatedBook({
                title: data.title,
                year_published: data.year_published,
                book_num: data.book_num,
                num_pages: data.num_pages,
                isbn: data.isbn,
                award_id: "",
                description: data.description,
                type_of_book: data.type_of_book
            })
            setLoading(false)
        }
        fetchData()
            .catch(console.error)
        changeBackground(location.pathname)
    }, [location.pathname, changeBackground, id])


    function handleChange(e) {
        setUpdatedBook({
            ...updatedBook,
            [e.target.name]: e.target.value,
        })

    }
   

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = updatedBook
        const options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch(`http://localhost:9393/books/${id}`, options)
        // const data = await resp.json()
        //redirect
        navigate(`/books/${id}`)
    }

    if(loading) {
        return <h1 class="white-text"><b>loading...</b></h1>
    } else {
        return (
            <div>
                <h1 class="white-text">Update {book.title}</h1>
                <form class="col s12" onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col s6 white-text">
                            Book Title:
                            <div class="input-field inline">
                                <input class="validate white-text" name="title" id="title" type="text" value={updatedBook.title} onChange={handleChange} autoFocus={true}/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s6 white-text">
                            Year Published:
                            <div class="input-field inline">
                                <input class="validate white-text" name="year_published" id="year_published" type="text" value={updatedBook.year} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col s6 white-text">
                            Book Number:
                            <div class="input field-inline">
                                <input class="validate white-text" name="book_num" id="book_num" type="text" value={updatedBook.book_num} onChange={handleChange}/>
                            </div>
                        </div>                   
                    </div>
                    <div class="row">
                        <div class="col s6 white-text">
                            Type of Book:
                            <div class="input field-inline">
                                <input class="validate white-text" name="type_of_book" id="type_of_book" type="text" value={updatedBook.type} onChange={handleChange}/>
                            </div>
                        </div>                  
                    </div>
                    <div class="row">
                        <div class="col s6 white-text">
                            Number of Pages:
                            <div class="input field-inline">
                                <input class="validate white-text" name="num_pages" id="num_pages" type="text" value={updatedBook.pages} onChange={handleChange}/>
                            </div>
                        </div>                   
                    </div>
                    <div class="row">
                        <div class="col s6 white-text">
                            ISBN:
                            <div class="input field-inline">
                                <input class="validate white-text" name="isbn" id="isbn" type="text" value={updatedBook.isbn} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 white-text">
                            Description:
                            <textarea class="materialize-textarea white-text" name="description" id="description" value={updatedBook.description} onChange={handleChange}/>
                        </div>
                    </div>
                    <br />
                    <input class="waves-effect waves-light btn" type="submit" value="Update"/>
                </form>
            </div>
        )
    }
}

export default EditBook