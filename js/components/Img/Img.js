class Img {
  #imgSrc
  #container
  #img
  constructor(imgSrc) {
    this.#imgSrc = imgSrc
  }
  get img() {
    return this.#img
  }
  render(container) {
    this.#container = container
    this.#img = document.createElement('img')
    this.#img.src = this.#imgSrc
    this.#container.appendChild(this.#img)
  }
}
