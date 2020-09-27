import React from 'react'

export default function Home({handleSignOut}) {
    return (
        <div>
            <h1> welcome to the home</h1>
            <button onClick={handleSignOut}>log out</button>
        </div>
    )
}
