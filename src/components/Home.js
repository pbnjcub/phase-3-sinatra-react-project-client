import React, { useEffect } from 'react'
import { useLocation} from 'react-router-dom'

const Home = ({changeBackground}) => {
    const location = useLocation()
    
    useEffect(() => {
        changeBackground(location.pathname)
    }, [])

    return (
        <div >
            <h1 style={{ fontFamily: 'Oswald:wght@600', color: 'white' }}><img src="img/The_Expanse_logo.png" alt="The Expanse Logo" width="400"/></h1>
            <br />
            <div>
            <h5 style={{color: 'white'}}>This page introduces the books and characters in the popular space-opera "The Expanse."</h5>
            </div>
            
        </div>
    )
}

export default Home