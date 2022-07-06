const container = document.querySelector('#container')

function createCanvas() {
    for(let i = 0; i < 16; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        for(let x = 0; x < 16; x++) {
            const grid = document.createElement('div')
            grid.classList.add('grid')
            row.appendChild(grid)
        }
        // const grid = document.createElement('div')
        // grid.classList.add('grid')
        // container.appendChild(grid)
    }    
}

createCanvas()
