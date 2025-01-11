//* Change text inside it btn1 
let btn1 = document.querySelector('#btn1');
btn1.textContent = "Start download when clicked";

//* Text after text in H1
let hd1 = document.querySelector("h1");
hd1.textContent += ', World';

//* innerHTML and Text after text in H2
let hd2 = document.querySelector("h2");
hd2.innerHTML += ', <i>Jai Shree Krishna</i>';

//* classList
let classlist = document.getElementById('makeRed');
classlist.classList.add('makeRed');

//* Using style 
let para = document.querySelector('.para');
para.style.color = "yellow";
