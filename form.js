let username = document.getElementById('username');
username.value=""
let output = document.getElementById('output');


function updateOutput(){
output.innerHTML= username.value;
}

username.addEventListener('keypress', updateOutput)