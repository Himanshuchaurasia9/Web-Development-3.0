let sidebarBtn = document.querySelector('.sidebar-btn');
let hiddenItems = document.querySelector('#navbar-items-hidden');
let crossBtn = document.querySelector('.hidden-x');

sidebarBtn.addEventListener('click',()=>{
    hiddenItems.style.display = "flex";
});

crossBtn.addEventListener('click',()=>{
    hiddenItems.style.display="none";
});

const words = ["Frontend Developer..", "Competitive Programmer"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // milliseconds
const erasingSpeed = 50; // milliseconds
const delayBetweenWords = 2000; // milliseconds
const typewriterElement = document.querySelector('.typewriter');

function type() {
    if (charIndex < words[wordIndex].length) {
        typewriterElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, delayBetweenWords);
});


