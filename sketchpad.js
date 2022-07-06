const container = document.querySelector('#container')

function createCanvas() {
    for(let i = 0; i < 16; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)
        for(let x = 0; x < 16; x++) {
            const grid = document.createElement('div')
            grid.classList.add('grid')
            grid.setAttribute('id', 'grid')
            row.appendChild(grid)
        }
    }    
}

createCanvas()

const grid = document.querySelectorAll('#grid')

// function colorChange(itm) {
//     if(itm.classList.contains('shaded')) {
//         itm.classList.remove('shaded')
//     } else {
//         itm.classList.add('shaded')
//     }

// }

grid.forEach((square) => {
    square.addEventListener('mouseover', () => {
        console.log('change')
        square.classList.toggle('shaded')
    })
})
