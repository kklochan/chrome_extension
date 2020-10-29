// Select the body, and add a mouse area.
const body = document.querySelector('body');
const container = document.createElement('div');
container.setAttribute('class', 'mousearea');
body.appendChild(container);
document.querySelector('#hplogo').style.transform = 'translateZ(100px)';
document.querySelector('form').style.transform = 'translateZ(50px)';
document.querySelector('.NKcBbd').style.transform = 'translateZ(1px)';

// Create a div that we put the Google elements into.
const googleStuff = document.createElement('center');
googleStuff.setAttribute('class', 'googleElements');
body.appendChild(googleStuff);

// Add the Google logo, and change it's z-index;
const googleLogo = document.querySelector('#hplogo');
googleStuff.appendChild(googleLogo);
document.querySelector('#hplogo').style.marginTop = '10%';
document.querySelector('#hplogo').style.marginBottom = '2%';
document.querySelector('#hplogo').style.cursor = 'pointer';
// document.querySelector('#hplogo').style.transformStyle = 'preserve-3d';

// Grab the search bar,
const searchBar = document.querySelector('form');
googleStuff.appendChild(searchBar);
document.querySelector('form').style.width = '25%';
document.querySelector('form').style.zIndex = '1';
document.querySelector('form').style.transformStyle = 'preserve-3d';

// Add "to those on the front lines... etc."
const extraText = document.querySelector('.NKcBbd');
googleStuff.appendChild(extraText);
document.querySelector('.NKcBbd').style.height = '200px';
document.querySelector('.NKcBbd').style.paddingTop = '75px';
document.querySelector('.NKcBbd').style.marginTop = '-75px';
document.querySelector('.NKcBbd').style.paddingBottom = '75px';
document.querySelector('.NKcBbd').style.backgroundColor = 'white';
document.querySelector('.NKcBbd').style.zIndex = '-1';

body.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  googleStuff.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

body.addEventListener('mouseenter', (e) => {
  document.querySelector('#hplogo').style.transform = 'translateZ(100px)';
  document.querySelector('form').style.transform = 'translateZ(50px)';
  document.querySelector('.NKcBbd').style.transform = 'translateZ(1px)';
});

body.addEventListener('mouseleave', (e) => {
  googleStuff.style.transition = 'all 0.25s ease';
  googleStuff.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
