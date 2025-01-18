let para = document.querySelector('p')
// console.log(para.innerText)
para.innerText = para.innerText + ' learn with sumit';
// console.log(para.innerText)

let div = document.querySelectorAll('div')
// console.log(div[2].innerText) 
let div2 = div[2].innerText + ' hello'
// console.log(div2)


let paraaa = document.getElementById('apna')
// console.log(paraaa.innerText)
paraaa.style.color = 'red'
paraaa.style.fontSize = '32px'

let id = document.getElementById('apna')
// console.log(id.innerText)

let div3 = document.querySelectorAll('div') 
console.log(div3)
let newdiv = div3[0].innerText = 'hello'
let newdiv1 = div3[1].innerText = 'mojo'
let newdiv2 = div3[2].innerText = 'whats up'
console.log(newdiv, newdiv1, newdiv2)
