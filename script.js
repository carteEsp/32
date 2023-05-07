const container = document.querySelector('.esp32-container');
const image = document.querySelector('.esp32-image');
const bubble = document.querySelector('.speech-bubble');
const dialog1 = document.getElementById('dialog-1');
const dialog2 = document.getElementById('dialog-2');
const dialog3 = document.getElementById('dialog-3');
const dialog4 = document.getElementById('dialog-4');
const tuto = document.getElementById('tuto');
const okBtn = document.getElementById('okBtn');
const divOk = document.querySelector('con2');

const imageWidth = image.offsetWidth;
const imageHeight = image.offsetHeight;

bubble.style.top = `-${imageHeight / 2}px`;
bubble.style.right = `${imageWidth}px`;


let dialogCounter = 1;
image.addEventListener('click', () => {
  if (dialogCounter === 1) {
    dialog1.style.display = 'none';
    dialog2.style.display = 'block';
    dialog3.style.display = 'none';
    dialog4.style.display = 'none';
    okBtn.style.display = 'none';
    dialogCounter = 2;
  } else if(dialogCounter === 2) {
    dialog2.style.display = 'none';
    dialog1.style.display = 'none';
    dialog3.style.display = 'block';
    dialog4.style.display = 'none';
    okBtn.style.display = 'none';
    dialogCounter = 3;
  } else{
    dialog2.style.display = 'none';
    dialog1.style.display = 'none';
    dialog3.style.display = 'none';
    dialog4.style.display = 'block';
    bubble.style.visibility = 'visible';
    bubble.style.opacity = '1';
    tuto.style.animation ='encounter 1.5s ease infinite alternate-reverse';
    tuto.style.marginTop = '1.7vh';
    tuto.style.transform = 'translateX(-5px)';
    okBtn.style.display = 'block';
  }
});
okBtn.addEventListener('click', () => {
  setTimeout(() => {
    okBtn.style.display = 'none';
    bubble.style.display = 'none';
    document.querySelector('.esp32-image').style.pointerEvents = 'none';
    document.querySelector('.esp32-image').style.animation = 'none';
  }, 75);

});