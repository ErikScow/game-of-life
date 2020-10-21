import React, {useState} from 'react'

import Cell from './Cell'
import Controls from './Controls'

import {
    createGrid, 
    iterateGen,
    getNeighbors,
    cellNextValue
  } from '../data-structure/functions'

const Grid = () => {
    const originalGrid = createGrid()
    const [grid, setGrid] = useState(originalGrid)
    const [generation, setGeneration] = useState(0)
    const [running, setRunning] = useState(false)

    return(
        <div>
            <div className='grid'>
            
                {grid.map(cell => {
                    return <Cell cell={cell} grid={grid} setGrid={setGrid} running={running}/>
                })}
                
            </div>
            <h3>Current Generation: {generation}</h3>
            <Controls grid={grid} setGrid={setGrid} generation={generation} setGeneration={setGeneration} running={running} setRunning={setRunning}/>
        </div>
        
    )
}

export default Grid