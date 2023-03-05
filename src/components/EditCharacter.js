import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const EditCharacter = ({characters, updateCharacter, changeBackground}) => {
    const { id } = useParams()
    const character = characters.find(character => character.id === parseInt(id))
    const [updatedCharacter, setUpdatedCharacter] = useState({
        name: character.name,
        description: character.description,
        location: character.location,
    })

    const navigate = useNavigate()


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
        const data = await resp.json()
        updateCharacter(data)
        navigate(`/characters/${id}`)
    }

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

    

export default EditCharacter