const modelViewerColor = document.querySelector("model-viewer#color");

const select = document.getElementById('colors-main');
const optionSec = document.getElementById('colors-second');
const optionTrd = document.getElementById('colors-third');
const optionFou = document.getElementById('colors-fourth');
const optionFive = document.getElementById('colors-fifth');
//working on change model

function changeColor(e) {
  const optionValue = e.target.value;
  // const optionToSelect = Array.from(select.options).find(option => option.value === optionValue);
  const params = new URLSearchParams();

  params.append('optionValue', optionValue);
  const url = new URL(window.location.href);
  url.search = params.toString();

  const newUrl = url.toString();
  history.pushState(null, '', newUrl)

  fetch('./get/demo.glb')
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();

      reader.onload = () => {
        const model = reader.result;
        modelViewerColor.src = URL.createObjectURL(blob);
  
        modelViewerColor.addEventListener('load', () => {
    
          const urlParams = new URLSearchParams(window.location.search);
          const optionValue = urlParams.get('optionValue');
          const optionToSelect = Array.from(select.options).find(select => optionValue.value === optionValue);

          if (optionValue) {
            const optionToSelect = select.querySelector(`option[value="${optionValue}"]`);
            console.log("lel")
            if (optionToSelect) {
              optionToSelect.selected = true;

              const [material] = modelViewerColor.model.materials;
              material.pbrMetallicRoughness.setBaseColorFactor(optionValue); 
            }
          }
        });
      };

      const qrcodeContainer = document.getElementById("qrcode");

      while (qrcodeContainer.firstChild)
        qrcodeContainer.removeChild(qrcodeContainer.firstChild)

      const qrcode = new QRCode(document.getElementById("qrcode"), {
        text: `${url}#ar`,
        width: 270,
        height: 270,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });

    reader.readAsArrayBuffer(blob);
  });
}

select.addEventListener('change', changeColor);
optionSec.addEventListener('change', changeColor);
optionTrd.addEventListener('change', changeColor);
optionFou.addEventListener('change', changeColor);
optionFive.addEventListener('change', changeColor);