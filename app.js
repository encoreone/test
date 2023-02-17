const buttonAr = document.getElementById('ar');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal__content--close');

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