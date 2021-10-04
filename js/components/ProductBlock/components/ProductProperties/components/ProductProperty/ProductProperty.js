class ProductProperty {
  #container
  #span
  constructor() {}
  render(container) {
    this.#container = container
    this.#span = document.createElement('span')
    this.#span.classList.add('template__property')
    this.#span.setAttribute('contenteditable', 'true')
    this.#span.innerText = 'Властивість'
    this.#container.appendChild(this.#span)
  }
}
