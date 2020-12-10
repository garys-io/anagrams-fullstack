import React, { useRef, MutableRefObject, useState } from 'react'

import AnagramCountRow from './AnagramCountRow'
import './App.css'


const baseUrl = "http://localhost:8000"


function App() {

    const [msg, setMsg] = useState("")
    const [top10Anagrams, setTop10Anagrams] = useState([])
    const word1 = useRef() as MutableRefObject<HTMLInputElement>
    const word2 = useRef() as MutableRefObject<HTMLInputElement>

    const fetchAreAnagrams = () => {
        const word1Value = word1.current.value
        const word2Value = word2.current.value
        fetch(`${baseUrl}/are-anagrams?word1=${word1Value}&word2=${word2Value}`)
            .then(response => response.json())
            .then(areAnagrams => setMsg(`"${word1Value}" and "${word2Value}" are ${
                areAnagrams ? '' : 'NOT'
            } anagrams.`))
            .catch(console.error)
    }

    const fetchTop10Anagrams = () => {
        fetch(`${baseUrl}/top10-anagrams`)
            .then(response => response.json())
            .then(setTop10Anagrams)
            .catch(console.error)
    }

    return (
        <div className="App">
            <header className="App-header">
                <label htmlFor="word1">First word</label><input ref={word1} id="word1" type="text"/>
                <label htmlFor="word2">Second word</label><input ref={word2} id="word2" type="text"/>
                <button onClick={fetchAreAnagrams}>Fine if the two words are <code>anagrams</code></button>
                <p><code>{msg}</code></p>
            </header>
            <section className="App-section">
                <button onClick={fetchTop10Anagrams}>Refresh Top 10 Anagrams</button>
                {top10Anagrams.map(AnagramCountRow)}
            </section>
        </div>
    )
}

export default App
