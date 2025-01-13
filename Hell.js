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
