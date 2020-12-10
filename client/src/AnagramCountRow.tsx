import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

import AnagramCount from './AnagramCount'


function AnagramCountRow(anagramCount: AnagramCount) {
    const { anagram, count } = anagramCount
    return (
        <TableRow key={anagram}>
            <TableCell>{`"${anagram}"`}</TableCell>
            <TableCell>{count}</TableCell>
        </TableRow>
    )
}


export default AnagramCountRow
