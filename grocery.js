const input = document.querySelector('input')
const body = document.querySelector('body')
const list = document.querySelector('#list')
let inputActive = false

input.addEventListener('input', function() {
    input.style.color = 'black'
})

input.addEventListener("keydown", logKey);

function logKey(e) {
    if(e.code == 'Enter') {
        list.innerHTML += `<br>- ${input.value} <br>`
        input.value = ''
    }
}