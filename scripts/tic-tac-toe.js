const gameboard = (function() {
    const board = document.getElementById('ttt')
    
    for(let i=0; i<9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('tile')
        cell.setAttribute('id', `cell${i}`)
        cell.textContent = `${i}`
        board.appendChild(cell)
    }

    const tiles = document.querySelectorAll('.cell')
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            // tile.textContent = 'X'
            console.log
        })
    })
    return new Array(9).fill(0)
})()

const player = (name, icon) => {
    return { name, icon }
}

const gameplay = (function() {
    
})()