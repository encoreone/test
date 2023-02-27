const modelViewerTexture = document.querySelector("model-viewer#pickMaterial");

modelViewerTexture.addEventListener("load", () => {
  const materialMain = modelViewerTexture.model.materials[0];
  const materialSecond = modelViewerTexture.model.materials[1];
  const materialThird = modelViewerTexture.model.materials[2];
  const materialFourth = modelViewerTexture.model.materials[3];
  const materialFifth = modelViewerTexture.model.materials[4];

  const createAndApplyTextureOne = async (channel, event) => {
    const texture = await modelViewerTexture.createTexture(event.target.value);
    materialMain.pbrMetallicRoughness[channel].setMetallicFactor(texture);
    // materialMain.pbrMetallicRoughness[channel].baseColorFactor(texture);
  }

  const createAndApplyTextureTwo = async (channel, event) => {
    const texture = await modelViewerTexture.createTexture(event.target.value);

    materialSecond.pbrMetallicRoughness[channel].setTexture(texture);
  }

  const createAndApplyTextureThree = async (channel, event) => {
    const texture = await modelViewerTexture.createTexture(event.target.value);

    materialThird.pbrMetallicRoughness[channel].setTexture(texture);
  }

  const createAndApplyTextureFour = async (channel, event) => {
    const texture = await modelViewerTexture.createTexture(event.target.value);

    materialFourth.pbrMetallicRoughness[channel].setTexture(texture);
  }
  
  const createAndApplyTextureFive = async (channel, event) => {
    const texture = await modelViewerTexture.createTexture(event.target.value);

    materialFifth.pbrMetallicRoughness[channel].setTexture(texture);
  }

  document.querySelector('#colors-main').addEventListener('input', event => createAndApplyTextureOne('baseColorTexture', event));
  document.querySelector('#colors-second').addEventListener('input', event => createAndApplyTextureTwo('baseColorTexture', event))
  document.querySelector('#colors-third').addEventListener('input', event => createAndApplyTextureThree('baseColorTexture', event))
  document.querySelector('#colors-fourth').addEventListener('input', event => createAndApplyTextureFour('baseColorTexture', event))
  document.querySelector('#colors-fifth').addEventListener('input', event => createAndApplyTextureFive('baseColorTexture', event))
});