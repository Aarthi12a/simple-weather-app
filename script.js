const fire = document.querySelector('.fire-inside');
const img = document.querySelector('img');
let h2 = document.querySelector('h2');

const container = document.getElementsByClassName('container');
let count =0;
img.addEventListener('dblclick',(event)=> {
    console.log('db clicked', ++count);
    h2.innerText = `you clicked ${count} times`;
    fire.style.left=(event.offsetX)+"px";
        fire.style.top=(event.offsetY-4)+"px";

    showfire();

});

function showfire() {
   fire.classList.toggle('show');
   setTimeout(
  toggleFire
    ,1000)
}

function toggleFire() {
    fire.classList.toggle('show');
}