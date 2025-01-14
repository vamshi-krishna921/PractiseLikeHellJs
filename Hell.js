//* Change text inside it btn1
let btn1 = document.querySelector("#btn1");
btn1.textContent = "Start download when clicked";

//* Text after text in H1
let hd1 = document.querySelector("h1");
hd1.textContent += ", World";

//* innerHTML and Text after text in H2
let hd2 = document.querySelector("h2");
hd2.innerHTML += ", <i>Jai Shree Krishna</i>";

//* classList
let classlist = document.getElementById("makeRed");
classlist.classList.add("makeRed");

//* Using style
let para = document.querySelector(".para");
para.style.color = "yellow";

//*  Create a button and when button is clicked change the text in paragraph
let changePara = document.querySelector(".button1");
let onClickcChangePara = document.querySelector(".Q1");
changePara.addEventListener("click", function () {
  onClickcChangePara.textContent = "The button is clicked and para is changed";
});

//* Create a page with 2 images and button. When button is clicked swap the source attribute of both the images
let srcChange1 = document.getElementById("srcChange1");
let srcChange2 = document.getElementById("srcChange2");
let srcChangeclick = document.getElementById("srcChangeclick");
srcChangeclick.addEventListener("click", function () {
  let image1 = srcChange1.src;
  let image2 = srcChange2.src;
  srcChange1.src = image2;
  srcChange2.src = image1;
});

//* Create a form with input fields and a submit button. Use Javascrpit to validate the form and display an error msg if the input is invalid.
let form = document.querySelector("form");
let inpts = document.querySelectorAll('input[type="text"]');
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let error = document.querySelectorAll(".error");
  error.forEach((elem) => elem.remove());
  for (var i = 0; i < inpts.length; i++) {
    let input = inpts[i];
    let label = document.createElement("label");
    label.textContent = "Error";
    label.classList.add("error");
    if (input.value.trim() === "") {
      input.insertAdjacentElement("afterend", label);
    }
  }
});

//* Create an unordered list. Allow users to add and remove list items dynamically.
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let textAdder = document.getElementById("textAdder");
let ul = document.querySelector("ul");
let li;
add.addEventListener("click", function () {
  if (textAdder.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = textAdder.value;
    ul.appendChild(li);
    textAdder.value = "";
  }
});
remove.addEventListener("click", function () {
  for (elem of ul.children) {
    if (textAdder.value === elem.textContent) {
      ul.removeChild(elem);
    }
  }
  textAdder.value = "";
});

//* Create a countdown Timer it starts when button is clicked and stops when stops when stop button is clciked.
let Start = document.getElementById("start");
let Stop = document.getElementById("stop");
let h4 = document.querySelector("#timer");
let time;
Start.addEventListener("click", function () {
  var count = 0;
  Start.insertAdjacentElement("beforebegin", h4);
  time = setInterval(() => {
    h4.textContent = count;
    count++;
  }, 1000);
});
Stop.addEventListener("click", function () {
  clearInterval(time);
});

//**Create a tabbed interface when clicking on tabs display different content sections without page reloading.

//! Method - 1
// let div1 = document.querySelector('#div1');
// let div2 = document.querySelector('#div2');
// let div3 = document.querySelector('#div3');
// let text1 = document.querySelector('#text1');
// let text2 = document.querySelector('#text2');
// let text3 = document.querySelector('#text3');
// text1.style.display = "block";
// div1.addEventListener("click", function(){
//   clearText();
//   text1.style.display = "block";
// })
// div2.addEventListener("click", function(){
//   clearText();
//   text2.style.display = "block";
// })
// div3.addEventListener("click", function(){
//   clearText();
//   text3.style.display = "block";
// })

function clearText (){
  let texts = document.querySelectorAll('.texts');
  texts.forEach((elem) => {
    elem.style.display = "none";
  })
}

//! Method - 1
let divs = document.querySelectorAll('.divs');
let texts = document.querySelectorAll('.texts');
text1.style.display = "block";
divs.forEach((curDiv,index) => {
  curDiv.addEventListener("click", function(){
    clearText();
    texts[index].style.display = "block";
  })
})

//* Display a progress bar that updates in real-time, showing the progress of a task, download (or) form submission.
let progress = document.querySelector('.progress');
let count = 0;
let downloadCompleted = document.querySelector('.downloadCompleted');
let timeOut = setInterval(function(){
  if(count === 100){
    downloadCompleted.style.display = "block";
    clearInterval(timeOut);
  }
  else{
  count++;
  progress.style.width = count + '%';
}
},100);