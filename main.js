

// canvas
/* const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 550;
const CANVAS_HEIGHT = canvas.height = 530;
const imageWidth = 2200;


const image1 = new Image();
image1.src = 'image-prototype.png'

let spriteWidth = 550;
let spriteHeight = 530;
let x = 0;
let frame = 0;
function carrusel() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(image1,x * spriteWidth,0,spriteWidth,spriteHeight,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    frame++;
    if (frame % 30 === 0) {
     x++;
   } else if (x > 3) {
    x = 0;
   }
  
    requestAnimationFrame(carrusel);
}
carrusel();
console.log(image1)
// canvas */







// About seccion
const tabLinks = document.getElementsByClassName('tab-links');
const tabContent = document.getElementsByClassName('tab-contents');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const xIcon = document.getElementById('x-icon');

menuIcon.addEventListener('click', function() {
    menu.style.right = '50px';
    
});
xIcon.addEventListener('click', function() {
    menu.style.right = '-200px';
    
});
function openTab(tabname) {
    for(tablink of tabLinks){
    tablink.classList.remove('active-link');
}
    for(tabcontent of tabContent){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


// About seccion end


