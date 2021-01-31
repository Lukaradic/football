import React, { useState, useEffect } from 'react'
import API from './support/API.js'

function App() {
    const [data, setData] = useState({})
    function getData() {
        // API.get('/countries')
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="App">
            <header className="App-header">hello</header>
        </div>
    )
}

export default App
