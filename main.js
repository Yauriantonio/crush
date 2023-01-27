import './style.css'


function moverPosicionRandom(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
  alert('I knew that you would say yes, I LOVE YOU !!!! ❤️');

  divModoSexo.style.display = 'block';
  const cancion = new Audio('assets\\sound\\Track-hot.mp3');
  cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
  const img = document.createElement("img");
  img.src = "./public/assets/img/sexo.png";
  console.log(img)
  divModoSexo.appendChild(img)
});

botones = document.getElementsByTagName("button")
console.log(botones)

window.addEventListener('beforeunload', (event) => {
  event.preventDefault();
  event.returnValue = "";
});

// setupCounter(document.querySelector('#counter'))
