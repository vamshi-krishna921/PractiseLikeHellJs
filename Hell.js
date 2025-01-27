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

function clearText() {
  let texts = document.querySelectorAll(".texts");
  texts.forEach((elem) => {
    elem.style.display = "none";
  });
}

//! Method - 2
let divs = document.querySelectorAll(".divs");
let texts = document.querySelectorAll(".texts");
text1.style.display = "block";
divs.forEach((curDiv, index) => {
  curDiv.addEventListener("click", function () {
    clearText();
    texts[index].style.display = "block";
  });
});

//* Display a progress bar that updates in real-time, showing the progress of a task, download (or) form submission.
let progress = document.querySelector(".progress");
let count = 0;
let downloadCompleted = document.querySelector(".downloadCompleted");
let timeOut = setInterval(function () {
  if (count === 100) {
    downloadCompleted.style.display = "block";
    clearInterval(timeOut);
  } else {
    count++;
    progress.style.width = count + "%";
  }
}, 100);

//* Create a search bar that displays live search results as users type, updating the results without requiring a full page reload.
let search = document.getElementById("Search");
let data = [
  {
    Name: "Jai",
    src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Name: "shree",
    src: "https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    Name: "ram",
    src: "https://plus.unsplash.com/premium_photo-1683817397861-7cd0085e56f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    Name: "krishna",
    src: "https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Name: "jaishree",
    src: "https://images.unsplash.com/photo-1456327102063-fb5054efe647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    Name: "Jaikrishna",
    src: "https://images.unsplash.com/photo-1630827020718-3433092696e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let people = document.querySelector(".people");
let person = "";
data.forEach((elem) => {
  person += `<div class="person">
          <div class="img">
            <img src=${elem.src} alt="This is an image" />
          </div>
            <h4>${elem.Name}</h4>
        </div>`;
});
people.innerHTML = person;
search.addEventListener("input", function () {
  var searchPersons = data.filter((elem) => {
    return elem.Name.startsWith(search.value);
  });
  let matchingPersons = "";
  searchPersons.forEach((elem) => {
    matchingPersons += `<div class="person">
            <div class="img">
              <img src=${elem.src} alt="This is an image" />
            </div>
              <h4>${elem.Name}</h4>
          </div>`;
  });
  people.innerHTML = matchingPersons;
});

//*  Build a character counter for a text area or input field, which updates in real-time as the types and enforces a character limit.
let counter = document.getElementById("counter");
let textarea = document.getElementById("textarea");
textarea.addEventListener("input", function () {
  if (textarea.value.length >= 100) {
    counter.textContent = 100;
    textarea.value = textarea.value.substring(0, 100);
  } else {
    counter.textContent = textarea.value.length;
  }
});

//* Show a progress bar which shows the how much page has been scrolled
let progressBar = document.querySelector(".scroll");
window.addEventListener("scroll", function () {
  let scrollY = Math.round(window.scrollY);
  var documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  var scrollPercentage = (scrollY / documentHeight) * 100;
  progressBar.style.width = scrollPercentage + "%";
});

//* Simple TODO

let todoInput = document.querySelector("#todoInput");
let enter = document.querySelector("#enter");
let todoElem = document.querySelector(".todoElem");
let todoText = document.querySelector(".todoText");
enter.addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  let p = document.createElement("p");
  p.textContent = todoInput.value;
  p.classList = "todoText";
  todoElem.appendChild(p);
  document.querySelector(".h2").style.display = "block";
  todoInput.value = "";
}
todoElem.addEventListener("click", (event) => {
  let removeElem = event.target;
  removeElem.remove();
  if (todoElem.firstElementChild.nextElementSibling === null) {
    document.querySelector(".h2").style.display = "none";
  }
});

//* Keyboard Events
let keyevent = document.getElementById("keyevent");
let keyPressed = document.getElementById("keyPressed");
let keyCode = document.getElementById("keyCode");
let charCode = document.getElementById("charCode");
let keyType = document.getElementById("keyType");
keyevent.addEventListener("keydown", (Event) => {
  keyPressed.textContent = `key Pressed : ${Event.key}`;
  keyCode.textContent = `key Code : ${Event.code}`;
  charCode.textContent = `char Code : ${Event.key.charCodeAt(0)}`;
  keyType.textContent = `key Type : ${Event.type}`;
});

//* Digital watch project
let timer = document.querySelector(".time");
const showTime = () => {
  let curTime = new Date().toLocaleTimeString();
  timer.textContent = `${curTime}`;
};
showTime();
setInterval(() => {
  showTime();
}, 1000);

//* Stop Timer