import React from 'react'

const Cell = (props) => {

    const toggle = () => {
        if (!props.running){
            let index = props.grid.findIndex(cell => ((cell.x === props.cell.x) && (cell.y === props.cell.y)))
            let newCell

            if (props.cell.value != null){
                newCell = {
                    ...props.cell,
                    value: !props.cell.value
                }
            } else {
                newCell = {
                    ...props.cell
                }
            }
            
            let newGrid = [...props.grid]

            newGrid[index] = newCell

            props.setGrid(newGrid)
        }
    }

    let cellType = 'cell dead'
    if (props.cell.value === null){
        cellType = 'cell perma-dead'
    } else if (props.cell.value === true){
        cellType = 'cell alive'
    } else {
        cellType = 'cell dead'
    }

    return(
        <div className={cellType} onClick={toggle}>

        </div>
    )
}

export default Cell