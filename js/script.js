const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud')
const btn = document.querySelector('.restart');
const gameOver = document.querySelector('.container')

const jump =()=> {
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')

    }, 500)
} 



const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 100 && pipePosition > 0  && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/derrota.png';
        mario.style.width = '75px';
        mario.style.margin = '15px';

        gameOver.style.opacity = '1'

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump);

btn. addEventListener("click", function() {
    location. reload();
    });