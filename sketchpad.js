const container = document.querySelector('#container')

const resetButton = document.querySelector('#reset')

function reset() {
    const elems = document.querySelectorAll('.shaded')
    elems.forEach((e) => {
        e.classList.remove('shaded')
    })
}

resetButton.addEventListener('click', reset)

const resizeButton = document.querySelector('#resize')

resizeButton.addEventListener('click', newCanvas)

function createCanvas() {
    let size = window.prompt("How big do you want your grid to be? (Pick a number between 1 and 100)")

    if(size > 100) {
        window.alert(`${size} is too big! Setting your grid to 50 x 50`)
        size = 50
    }

    for(let i = 0; i < size; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        for(let x = 0; x < size; x++) {
            const grid = document.createElement('div')
            grid.classList.add('grid')
            grid.setAttribute('id', 'grid')
            row.appendChild(grid)
        }
    } 
    
    const grid = document.querySelectorAll('.grid')
    grid.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.toggle('shaded')
        })
    })
}

function newCanvas() {
    const row = document.querySelectorAll('.row')
    row.forEach((r) => {
        r.remove()
    })
    createCanvas()
}

createCanvas()