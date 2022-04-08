// const divRed = document.querySelector('.red');
// divRed.addEventListener('click', function(){
//     console.log(this);
// })

let ciao = setInterval(myFunction, 3000);
console.log(ciao);
function myFunction() {
    alert('hello')
}
clearInterval(ciao)