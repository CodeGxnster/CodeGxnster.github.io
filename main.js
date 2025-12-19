const sword = document.getElementById('sword');
const swordShadow = document.getElementById('sword-shadow');
const swordAudio = document.querySelector('audio[src="sword-audio"]');
const star = document.getElementById('star');
const starShadow = document.getElementById('star-shadow');
const arrow = document.getElementById('arrow');
const arrowShadow = document.getElementById('arrow-shadow');

// Animation for the sword
function swordAnimation() {

   sword.style.transform = 'translateY(-40px)';
   swordShadow.style.transform = 'translateY(-40px)';
    swordShadow.style.opacity = 100;
    swordAudio.volume = 0.5; // Set volume to 50%
    swordAudio.playbackRate = 1.5; // Speed up the audio playback
    swordAudio.play();
   swordAudio.currentTime = 0; // Reset audio to start
   sword.style.cursor = 'pointer';

    

}
function swordAnimationOut() {
    sword.style.transform = 'translateY(0px)';
   swordShadow.style.transform = 'translateY(0px)';
   swordShadow.style.opacity = 0;
}
// Animation for the star
function starAnimation() {
    star.style.transform = 'translateY(-40px)';
    starShadow.style.transform = 'translateY(-40px)';
    starShadow.style.opacity = 100;
    star.style.cursor = 'pointer';
}
function starAnimationOut() {
    star.style.transform = 'translateY(0px)';
    starShadow.style.transform = 'translateY(0px)';
    starShadow.style.opacity = 0;
}
// Animation for the arrow
function arrowAnimation() {
    // arrow.style.transform = 'translateY(-40px)';
    // arrowShadow.style.transform = 'translateY(-40px)';
    arrow.style.transform = 'rotate(20deg)';
    arrowShadow.style.transform = 'rotate(20deg)';
    arrowShadow.style.opacity = 100;
    arrow.style.cursor = 'pointer';
}
function arrowAnimationOut() {
    arrow.style.transform = 'translateY(0px)';
    arrowShadow.style.transform = 'translateY(0px)';
    arrowShadow.style.opacity = 0;
}

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
function openTab(event, tabname) {
    for (let tablink of tabLinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabContent) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


// About seccion end
// Events
let swordMouseOver = sword.addEventListener('mouseover', swordAnimation);
let swordMouseOut = sword.addEventListener('mouseout', swordAnimationOut);
let starMouseOver = star.addEventListener('mouseover', starAnimation);
let starMouseOut = star.addEventListener('mouseout', starAnimationOut);
let arrowMouseOver = arrow.addEventListener('mouseover', arrowAnimation);
let arrowMouseOut = arrow.addEventListener('mouseout', arrowAnimationOut);



