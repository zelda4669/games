(function gameboard() {
    const game = document.getElementById('tic-tac-toe')
    
    for(let i=0; i<3; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        row.setAttribute('id', i)
        game.appendChild(row)

        for(let x=0; x<3; x++) {
            let tile = document.createElement('div')
            tile.classList.add('tile')
            tile.setAttribute('id', x)
            tile.textContent = `X`
            row.appendChild(tile)
        }

    }
})()