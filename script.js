
const ZERO = document.querySelector('.ZERO')
const grunt = document.querySelector('.grunt')
const telagameover = document.getElementById('gameover')
const restart = document.getElementById('restart')


let gameover = false

const jump= () =>{
    if(gameover) return;

    ZERO.classList.remove('jump')
    void ZERO.offsetWidth;

    ZERO.classList.add('jump')
    ZERO.src='./assets/imagens/ZeroRoll.webp'

    setTimeout(() => {
        ZERO.classList.remove('jump')

        if (!gameover){
        setTimeout(() => {
            ZERO.src = './assets/imagens/ZeroRun.webp'
        }, 50);
        }
    }, 500);
}

const loop = setInterval(() => {

    const gruntposition = grunt.offsetLeft;
    const ZEROposition = +window.getComputedStyle(ZERO).bottom.replace('px', '');

    if (gruntposition <= 120 && gruntposition > 0 && ZEROposition < 80)  {

        grunt.style.animation = 'none';
        grunt.style.left = `${gruntposition}px`

        ZERO.style.animation = 'none';
        ZERO.style.zIndex = 10

        ZERO.src = './assets/imagens/caiu.webp';

        gameover = true
        telagameover.style.display = 'block';

        clearInterval(loop)
        
        telagameover.style.display = 'block';
    }

}, 10);

restart.addEventListener('click', ()=>{
    location.reload();
})

document.addEventListener('keydown',  jump)