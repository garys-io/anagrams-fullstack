import React from 'react'

import './App.css'


const baseUrl = "http://localhost:8000"


function App() {

    const word1 = "abc"
    const word2 = "bca"

    fetch(`${baseUrl}/are-anagrams?word1=${word1}&word2=${word2}`)
        .then(response => response.json())
        .then(console.log)
        .catch(console.error)

    fetch(`${baseUrl}/top10-anagrams`)
        .then(response => response.json())
        .then(console.log)
        .catch(console.error)

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello, <code>World!</code></p>
            </header>
        </div>
    )
}

export default App
