// let btn1 = document.querySelector("#btn1");

// // btn1.onClick = (e) => {
// //     console.log(e)
// //     console.log(e.type)
// //     console.log(e.target)
// //     console.log(e.clientX, e.clientY)
// // };

// btn1.addEventListener("click", (e) => {
//   console.log("button1 was click");
//   // console.log(e)
//   // console.log(e.target)
//   // console.log(e.type)
// });
// btn1.addEventListener("click", () => {
//   console.log("button1 --hanler1");
// });
// btn1.addEventListener("click", () => {
//   console.log("button1 --hanler2");
// });

// const handler3 = () => {
//   console.log("button1 --hanler3");
// };
// btn1.addEventListener("click", handler3);

// btn1.removeEventListener("click",  handler3);

// // let div = document.querySelector("div");

// // div.onmouseover = () => {
// //     console.log(e)
// //     console.log(e.type)
// //     console.log(e.target)
// //     console.log(e.clientX, e.clientY)
// // };

let btn = document.querySelector("#mode");
let currMode = "light";
let body =document.querySelector('body')

btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector('body').style.backgroundColor = 'black'

    // document.querySelector('body').classList.add('dark')
    // document.querySelector('body').classList.remove('light')

    body.classList.add('dark')
    body.classList.remove('light')

  } else {
    currMode = "light";
    // document.querySelector('body').style.backgroundColor = 'white'

    // document.querySelector('body').classList.add('light')
    // document.querySelector('body').classList.remove('dark')

    body.classList.add('light')
    body.classList.remove('dark')

  }
  console.log(currMode)
});
