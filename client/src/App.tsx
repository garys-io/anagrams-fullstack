import React, { useRef, MutableRefObject, useState, useEffect } from 'react'
import {
    Grid,
    Container,
    FormLabel,
    Button,
    Input,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core'

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

    useEffect(fetchTop10Anagrams, [])

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <Grid item xs={12}>
                        <FormLabel>Enter two words to see if they are anagrams</FormLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <Input inputRef={word1} id="word1" type="text" placeholder="wolf..." />
                        <Input inputRef={word2} id="word2" type="text" placeholder="flow..." />
                        <Button onClick={fetchAreAnagrams} variant="contained">anagrams?</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel>{msg}</FormLabel>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Button
                        onClick={fetchTop10Anagrams}
                        variant="contained"
                        fullWidth
                    >
                        Refresh Top 10 Anagrams
                    </Button>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Anagram</TableCell>
                                <TableCell>Count</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {top10Anagrams.map(AnagramCountRow)}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Container>
    )
}

export default App
