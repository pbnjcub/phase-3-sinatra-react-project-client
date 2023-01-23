import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation} from 'react-router-dom'


const EditCharacter = ({changeBackground}) => {
    const [character, setCharacter] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const [updatedCharacter, setUpdatedCharacter] = useState({
        name: "",
        description: "",
        location: "",
    })

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        changeBackground(location.pathname)
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:9393/characters/${id}`)
            const data = await resp.json()
            setCharacter(data)
            setUpdatedCharacter({
                name: data.name,
                description: data.description,
                location: data.location,
            })
            setLoading(false)
        }
        fetchData()
            .catch(console.error)
        changeBackground(location.pathname)

    }, [location.pathname, changeBackground, id])

    function handleChange(e) {
        setUpdatedCharacter({
            ...updatedCharacter,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        const body = updatedCharacter

        const options = {
            method: "PATCH",
            headers,
            body: JSON.stringify(body)
        }
        const resp = await fetch(`http://localhost:9393/characters/${id}`, options)
        
        navigate(`/characters/${id}`)
    }


    if(loading) {
        return <h1 class="white-text"><b>loading...</b></h1>
    } else {

        return (
            <div > 
                <h1 class="white-text">Update {character.name} </h1>
                <form class="col s12" onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col s6 white-text">
                            Name of Character:
                            <div class="input-field inline">
                                <input class="validate white-text" name="name" id="name" type="text" value={updatedCharacter.name} onChange={handleChange} autoFocus={true} />
                            </div>
                        </div>
                    </div>
                        
                    <div class="row">
                        <div class="col s6 white-text">
                            Description of Character:
                            <textarea class="materialize-textarea white-text" name="description" id="description" value={updatedCharacter.description} onChange={handleChange}/>
                        </div>                   
                    </div>
                    <div class="row">
                        <div class="col s3 white-text">
                            Affiliation:
                            <div class="input-field-inline">
                                <input class="validate white-text" name="location" id="location" type="text" value={updatedCharacter.location} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <input class="waves-effect waves-light btn" type="submit" value="Update Character"/>
                </form>
            </div>
        )
    }
}
    

export default EditCharacter