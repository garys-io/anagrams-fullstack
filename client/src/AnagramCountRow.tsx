import React from 'react'

import AnagramCount from './AnagramCount'


function AnagramCountRow(anagramCount: AnagramCount) {
    const { anagram, count } = anagramCount
    return <p>{`"${anagram}" ${count}`}</p>
}


export default AnagramCountRow
