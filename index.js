function etch(num) {


if(document.querySelector('.container')) {
    document.body.removeChild(document.querySelector('.container'))
}
    
const container = document.createElement('div')

container.setAttribute('class', 'container')



document.body.appendChild(container)

for(let i = 0; i < (num * num); i++) {
    let box = document.createElement('div')
    box.setAttribute('class', 'box')
    // console.log(i)
    container.appendChild(box)
}

container.style.setProperty('--custom-size', num)


const selector = document.querySelectorAll('.box')

console.log(selector)

selector.forEach(selection => {
    selection.addEventListener('mouseover', function() {
        console.log(Math.floor(Math.random() * 255))
        selection.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    })
})

} 



// etch(12)



const button = document.querySelector('button')
button.addEventListener('click', function() {
    const input =  prompt('Hey man how many tiles high do you want the board to be?  Its a square.  Maximum of 16')
   etch(input)
} )
