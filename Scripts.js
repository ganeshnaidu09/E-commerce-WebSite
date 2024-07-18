// Index page

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
//shop page script

// var MainImg = document.getElementById("MainImg");
// var Imgs = document.getElementsByClassName("imgs");
// for (let index = 0; index <= 12 ; index++) {
//   Imgs[index].onclick = function () {
//     MainImg.src = Imgs[index].src;
//   };
// }


// single product page script

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");
var Img = document.getElementsByClassName("img");

for (let index = 0; index <= 3; index++) {
  smallimg[index].onclick = function () {
    MainImg.src = smallimg[index].src;
  };
}

for (let index = 0; index <= 8 ; index++) {
  Img[index].onclick = function () {
    MainImg.src = Img[index].src;
  };
}


