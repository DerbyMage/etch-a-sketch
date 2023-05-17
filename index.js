function etch() {

const container = document.createElement('div')
container.setAttribute('class', 'container')



document.body.appendChild(container)

for(let i = 0; i < 256; i++) {
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    console.log(i)
    container.appendChild(box)
}


}

etch()

const selector = document.querySelectorAll('.box')

console.log(selector)

selector.forEach(selection => {
    selection.addEventListener('mouseover', function() {
        selection.style.backgroundColor = 'blue'
    })
})
