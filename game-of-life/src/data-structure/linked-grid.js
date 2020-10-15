class GridNode {
    constructor(
        state = 'dead', 
        left = null,
        right = null,
        top = null,
        bottom = null,
        topLeft = null,
        topRight = null,
        bottomLeft = null,
        bottomRight = null
        ){
        this.state = state
        this.left = left
        this.right = right
        this.top = top
        this.bottom = bottom
        this.topLeft = topLeft
        this.topRight = topRight
        this.bottomLeft = bottomLeft
        this.bottomRight = bottomRight
    }

}

class Grid {
    constructor(){
        this.topLeftCorner = GridNode()
    }
}