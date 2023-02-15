let myBtn = document.getElementById('my_btn');

myBtn.addEventListener('click', addPTag);
let inputField = document.getElementById('my_input');


function addPTag(){
  let p = document.createElement('p');
  p.innerHTML = inputField.value;
  let h1 = document.getElementById('welcome');
  h1.parentElement.appendChild(p);
}