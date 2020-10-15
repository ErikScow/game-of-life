




let array = []

for (x = 0; x < 28; x++){
    for (y = 0; y < 28; y++){
        array.push({
            x: x,
            y: y,
            value: null
            
        })
    }
}

for (x = 1; x < 27; x++){
    for (y = 1; y < 27; y++){
        array.forEach(cell => {
            if (cell.x === x && cell.y === y){
                cell.value = false
            }
            
        })
    }
}


console.log(array)


console.log(array.filter(point => point.x === 0))

function getNeighbors(currentCell){
    const bottomLeft = array.filter(cell => ((cell.x === currentCell.x - 1) && (cell.y === currentCell.y - 1)))
    const left = array.filter(cell => ((cell.x === currentCell.x - 1) && (cell.y === currentCell.y)))
    const topLeft = array.filter(cell => ((cell.x === currentCell.x - 1) && (cell.y === currentCell.y + 1)))
    const bottom = array.filter(cell => ((cell.x === currentCell.x) && (cell.y === currentCell.y - 1)))
    const top = array.filter(cell => ((cell.x === currentCell.x) && (cell.y === currentCell.y + 1)))
    const bottomRight = array.filter(cell => ((cell.x === currentCell.x + 1) && (cell.y === currentCell.y -1)))
    const right = array.filter(cell => ((cell.x === currentCell.x + 1) && (cell.y === currentCell.y)))
    const topRight = array.filter(cell => ((cell.x === currentCell.x + 1) && (cell.y === currentCell.y + 1)))

    const neighbors = [bottomLeft[0], left[0], topLeft[0], bottom[0], top[0], bottomRight[0], right[0], topRight[0]]

    return neighbors
}

/* function willLive(currentCell){
    const neighbors = getNeighbors(currentCell)
    neighbors.forEach(cell => {
        if (cell.value === 'dead'){

        }
    })
} */

let testCell = array.filter(cell => (cell.x === 1) && (cell.y === 1))

console.log(getNeighbors(testCell[0]))