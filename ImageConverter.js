class ImageConverter {
  constructor(width = 256, height = 256) {
    this.canvas = new OffscreenCanvas(width, height);
    this.width = width;
    this.height = height;
    this.context = this.canvas.getContext('2d');
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }
  convertImageToImageData(image) {
    if(image.width > this.width || image.height > this.height) {
      this.resize(image.width, image.height);
    }
    this.context.drawImage(image, 0, 0);
    const imgData = this.context.getImageData(0, 0, this.width, this.height, {colorSpace: "srgb", pixelFormat: "rgba-unorm8"});
    return imgData;
  }
}

export {ImageConverter};