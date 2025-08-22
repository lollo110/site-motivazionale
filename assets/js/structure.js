let motiv = document.querySelector('h1');
let panter = document.querySelector('.pantera img');
let fumo = document.querySelector('#position');
let titre = document.querySelector('.title');
let pantSdraiata = document.querySelector('.button img');

window.addEventListener('load', function(){
fumo.style.opacity = 1;

    setTimeout(() => {
    motiv.style.opacity = 1;
    titre.style.opacity = 1;
    panter.style.opacity = 1;
    pantSdraiata.style.opacity = 1;
  }, 800);
});