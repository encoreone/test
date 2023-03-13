const modelViewerColor = document.querySelector("model-viewer#color");
const select = document.getElementById('colors-main');
const optionSec = document.getElementById('colors-second');
const optionTrd = document.getElementById('colors-third');
const optionFou = document.getElementById('colors-fourth');
const optionFive = document.getElementById('colors-fifth');

async function changeColor(e) {
  const optionValue = select.value;
  const optionValueSec = optionSec.value;
  const optionValueTrd = optionTrd.value;
  const optionValueFou = optionFou.value;
  const optionValueFive = optionFive.value;

  const optionToSelect = Array.from(select.options).find(option => option.value === optionValue);

  const params = new URLSearchParams();
  params.append('firstValue', optionValue);
  // params.append('secondValue', optionValueSec);
  // params.append('thirdValue', optionValueTrd);
  // params.append('fourthValue', optionValueFou);
  // params.append('fifthValue', optionValueFive);

  const url = new URL(window.location.href);
  url.search = params.toString();
  const newUrl = url.toString();
  history.pushState(null, '', newUrl);

  const response = await fetch('./get/demo.glb');
  const blob = await response.blob();

  const reader = new FileReader();
  reader.onload = async () => {
      modelViewerColor.src = URL.createObjectURL(blob);

          const urlParams = new URLSearchParams(window.location.search);
          const optionValue = urlParams.get('firstValue');
          // const optionValue = urlParams.get('secondValue');
          // const optionValue = urlParams.get('secValue');
          // const optionValue = urlParams.get('secValue');

          const optionToSelect = Array.from(select.options).find(option => option.value === optionValue);

          if (optionValue) {
            const optionToSelect = optionValue.querySelector(`option[value="${optionValue}"]`);
            
            if (optionToSelect) {
              optionToSelect.selected = true;

              const buffer = reader.result;
          const [main, sec, thrd, foth, fiv] = modelViewerColor.model.materials;
            main.pbrMetallicRoughness.setBaseColorFactor(optionValue); 
            // sec.pbrMetallicRoughness.setBaseColorFactor(optionValueSec);
            // thrd.pbrMetallicRoughness.setBaseColorFactor(optionValueTrd);
            // foth.pbrMetallicRoughness.setBaseColorFactor(optionValueFou);
            // fiv.pbrMetallicRoughness.setBaseColorFactor(optionValueFive);

            modelViewerColor.model.materials = materials;
            // modelViewerColor.src = URL.createObjectURL(blob);
            }
          }

    

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

  };

}

select.addEventListener('change', changeColor);
optionSec.addEventListener('change', changeColor);
optionTrd.addEventListener('change', changeColor);
optionFou.addEventListener('change', changeColor);
optionFive.addEventListener('change', changeColor);