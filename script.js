// console.log(document)
// console.log(document["all"])
// console.log(document.title)
// console.log(document.links)

// document.title = "Amirbek's blog"

// console.log(document.links)

// // console.dir(document.children)
// // console.log(document);
// // const signButton = document.children[0].children[1].children[0].children[1]
// // children[1]
// // console.log(signButton)
// // signButton.textContent = "Register"

// // document.getElementById("title");

// const myTitle = document.getElementById("title");

// myTitle.innerText = "Hello world"

// myTitle.innerHtml = "<h2>Hello</h2> <br> <br> <p>World</p>"

// const enterButton = document.getElementById("kirish");

// enterButton.innerText = "Kirish"


// const linklar = document.getElementsByTagName("a")

// console.log(linklar);

// linklar[0].style.color = "red"
// linklar[1].style.color = "green"
// linklar[2].style.color = "gold"

// if (!confirm("Linklarni chizig'i bo'lsinmi")) {
//     for (let i = 0; i < linklar.length; i++) {
//       linklar[i].style.textDecoration = "none"
//     }
// }

//  Document Object Modal = Dom == Html faylning object ko'rinishi
// document
// Selectorlar
// document.getElementaryById("hello")

// const btn = document.querySelector("button");

// function counter( {
//   const box = document.querySelector(".box")
// })
const btn = document.querySelector("button");

function counter() {
  const box = document.querySelector(".section1")

  box.style.backgroundColor = "lime"
  box.style.borderWidth = "10px"
}