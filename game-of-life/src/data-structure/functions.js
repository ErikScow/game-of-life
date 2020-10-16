
export {
    createGrid, 
    iterateGen,
    getNeighbors,
    cellNextValue
}

let x,y

function createGrid(){
    const grid = []
    for (x = 0; x < 28; x++){
        for (y = 0; y < 28; y++){
            grid.push({
                x: x,
                y: y,
                value: null
                
            })
        }
    }
    for (x = 1; x < 27; x++){
        for (y = 1; y < 27; y++){
            grid.forEach(cell => {
                if (cell.x === x && cell.y === y){
                    cell.value = false
                }
                
            })
        }
    }
    return grid
}

function iterateGen(grid){
    for (x = 1; x < 27; x++){
        for (y = 1; y < 27; y++){
            grid.forEach(cell => {
                const nextValue = cellNextValue(cell)
                cell.value = nextValue
            })
        }
    }
}

function getNeighbors(grid, currentCell){
    const bottomLeft = grid.filter(cell => ((cell.x === currentCell.x - 1) && (cell.y === currentCell.y - 1)))
    const left = grid.filter(cell => ((cell.x === currentCell.x - 1) && (cell.y === currentCell.y)))
    const topLeft = grid.filter(cell => ((cell.x === currentCell.x - 1) && (cell.y === currentCell.y + 1)))
    const bottom = grid.filter(cell => ((cell.x === currentCell.x) && (cell.y === currentCell.y - 1)))
    const top = grid.filter(cell => ((cell.x === currentCell.x) && (cell.y === currentCell.y + 1)))
    const bottomRight = grid.filter(cell => ((cell.x === currentCell.x + 1) && (cell.y === currentCell.y -1)))
    const right = grid.filter(cell => ((cell.x === currentCell.x + 1) && (cell.y === currentCell.y)))
    const topRight = grid.filter(cell => ((cell.x === currentCell.x + 1) && (cell.y === currentCell.y + 1)))

    const neighbors = [bottomLeft[0], left[0], topLeft[0], bottom[0], top[0], bottomRight[0], right[0], topRight[0]]

    return neighbors
}

function cellNextValue(grid, currentCell){
    const neighbors = getNeighbors(grid, currentCell)
    let livingNeighbors = 0
    neighbors.forEach(cell => {
        if (cell && cell.value){
            livingNeighbors ++
        }
    })
    if (currentCell.value != null){
        if (livingNeighbors < 2 || livingNeighbors > 3){
            return false
        }
        return true
    }
    return null
}