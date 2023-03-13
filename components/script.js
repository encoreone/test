const buttonAr = document.getElementById('ar');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal__content--close');

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt');
    }
  }
};

document.querySelector('model-viewer').addEventListener('progress', onProgress);

const myFunction = () => { document.getElementById("ar-button").innerHTML = "Загрузка...";} //button onload

buttonAr.addEventListener('click', () => {
    modal.style.display = "block";
});

modalClose.addEventListener('click', (event) => {
    if (event.target != modal) {
        modal.style.display = "none";
    }
});
  
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});