const optionSec = document.getElementById('colors-second');

async function changeColorSec(e) {
  const optionValue = e.target.value;
  const optionToSelect = Array.from(optionSec.options).find(option => option.value === optionValue);
  const params = new URLSearchParams();

  params.append('secValue', optionValue);
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
  
        modelViewerColor.addEventListener('load', (event) => {
    
          const urlParams = new URLSearchParams(window.location.search);
          const optionValue = urlParams.get('secValue');
          const optionToSelect = Array.from(optionSec.options).find(optionSec => optionValue.value === optionValue);

          if (optionValue) {
            const optionToSelect = optionSec.querySelector(`option[value="${optionValue}"]`);
            
            if (optionToSelect) {
              optionToSelect.selected = true;

              const [, sec] = modelViewerColor.model.materials;
              sec.pbrMetallicRoughness.setBaseColorFactor(optionValue); 
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
  })
}

optionSec.addEventListener('change', changeColorSec);
