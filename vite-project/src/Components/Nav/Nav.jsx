import React from 'react'
import './Nav.css'


export default function Nav() {
    return (
        <>
            <div className='navContainer'>
                <h1>Anonime</h1>
                <h2>Home</h2>
                <h2>List anime</h2>
                <input type="text" placeholder='Search anime or movie' />
            </div>
        </>
    )
}