/* 
change texture

snipp:

  *texture
  const createAndApplyTextureOne = async (channel, event) => {
    const texture = await modelViewerTexture.createTexture(event.target.value);

    materialMain.pbrMetallicRoughness[channel].setTexture(texture);
    // materialMain[channel].setTexture(texture);

    // materialMain.pbrMetallicRoughness.setBaseColorFactor("#fff")[channel];

    // materialMain[channel].setTexture(texture)
  }

  *color
  const createAndApplyTextureThree = (channel, event) => materialThird.pbrMetallicRoughness.setBaseColorFactor(event.target.value);
*/