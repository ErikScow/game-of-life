import React, { useEffect, useState, useRef } from 'react'

import {
    createGrid, 
    iterateGen,
    getNeighbors,
    cellNextValue
} from '../data-structure/functions'



const Controls = (props) => {
    const { generation, setGeneration } = props

    const resetGrid = createGrid()

    const [speed, setSpeed] = useState({
        value: 125,
        speed: 'Slow'
    })
    const [buttonValue, setButtonValue] = useState('Start')
    const [interval, setinterval] = useState(null)

    const nextGen = () => {
        console.log('calling')

        const nextGrid = iterateGen(props.grid)

        props.setGrid(nextGrid)

        props.setGeneration(generation => generation + 1)
    }

    const toggleRunning = () => {
        if (!props.running) {
            props.setRunning(true)
            setButtonValue('Stop')
        } else {
            props.setRunning(false)
            setButtonValue('Start')
        }
    }

    const reset = () => {
        props.setGrid(resetGrid)
        props.setGeneration(0)
        if (props.running){
            toggleRunning()
        }
        
    }

    useEffect(() => {
        if (props.running) {
            setinterval(setInterval(nextGen, speed.value))
            clearInterval(interval)
        } 
        return clearInterval(interval)
    }, [props.running, props.grid])

    return(
        <div>
            <button onClick={()=> {
                if (!props.running){
                    return nextGen()
                } 
            }
                }>Next Generation</button>
            <button onClick={toggleRunning}>{buttonValue}</button>
            <button onClick={reset}>Clear</button>
            <h4>Run Speed: {speed.speed}</h4>
            <div className='speed-buttons'>
                <button className='' onClick={()=>{setSpeed({
                    value: 500,
                    speed: 'Painfully Slow'
                })}}>Painfully Slow</button>
                <button className='' onClick={()=>{setSpeed({
                    value: 250,
                    speed: 'Very Slow'
                })}}>Very Slow</button>
                <button className='' onClick={()=>{setSpeed({
                    value: 125,
                    speed: 'Slow'
                })}}>Slow</button>
                <button className='' onClick={()=>{setSpeed({
                    value: 85,
                    speed: 'Fast'
                })}}>Fast</button>
                <button className='' onClick={()=>{setSpeed({
                    value: 55,
                    speed: 'Very Fast'
                })}}>Very Fast</button>
                <button className='' onClick={()=>{setSpeed({
                    value: 15,
                    speed: 'Seizure Inducing'
                })}}>Seizure Inducing</button>
            </div>
            
        </div>
    )
}

export default Controls