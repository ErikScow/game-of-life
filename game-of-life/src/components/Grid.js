import React, {useState} from 'react'

import Cell from './Cell'

import {
    createGrid, 
    iterateGen,
    getNeighbors,
    cellNextValue
  } from '../data-structure/functions'

const Grid = () => {
    const originalGrid = createGrid()
    const [grid, setGrid] = useState(originalGrid)

    return(
        <div className='grid'>
            {grid.map(cell => {
                return <Cell cell={cell} grid={grid} setGrid={setGrid}/>
            })}
        </div>
    )
}

export default Grid