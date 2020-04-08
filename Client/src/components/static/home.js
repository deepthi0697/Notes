import React from 'react'
const notes = require('./notes.jpg')

function Home(props){
    return (
        <div className="center-align">
            <h1>Welcome to notes</h1>
            <img src={notes} />
        </div>

    )
}

export default Home