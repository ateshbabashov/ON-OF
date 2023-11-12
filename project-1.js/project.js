



    
// elementlere catiram
let lampImg = document.querySelector('img');
let button1 = document.querySelector('#btnopen')
let button2 = document.querySelector('#btncloese')
lampImg.style.border = '5px solid red'

function openLight() {
// Funcsiyani ise saliram
    lampImg.src = '../img/open.jpg'
  
}
function closeLight() {
    lampImg.src = '../img/cloese.jpg'
}