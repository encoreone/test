const buttonAr = document.getElementById('ar');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal__content--close');

//qr interface
const href = window.location.href;
const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: `${href}#ar`,
    width: 270,
    height: 270,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

//qr activate block
if (href.endsWith('#ar')) {
    window.addEventListener("load", () => {
        var modelViewer = document.querySelector('.model-viewer');
        console.log("Can activate AR: " + modelViewer.canActivateAR);
        modelViewer.activateAR();
    });
}

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