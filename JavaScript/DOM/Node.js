// paraa.append(); //adds to end
// paraa.prepend(); //adds to start
// paraa.before(); //adds before the node(outside)
// paraa.after(); //adds start the node(inside)
// paraa.remove(); //removes the node

// let paraa = document.querySelector('div')
// console.log(paraa.innerText)

// let newBtn = document.createElement('Button')
// newBtn.innerText = 'click me!';
// console.log(newBtn)

// let p = document.querySelector('p')
// div.append(newBtn)
// div.prepend(newBtn)
// div.before(newBtn)
// div.after(newBtn)

// let newHeading = document.createElement('h1')
// newHeading.innerText = 'learn with sumit'

// document.querySelector('body').prepend(newHeading)
// document.querySelector('body').apend(newHeading)

let newBtn = document.createElement('button')
newBtn.innerText = 'click me!'
newBtn.style.color = 'white'
newBtn.style.backgroundColor = 'red'

document.querySelector('body').append(newBtn)