class ProductBlock {
  #container
  #productBlock
  #parent
  #templateContainer
  constructor(templateContainer, parent) {
    this.#templateContainer = templateContainer
    this.#parent = parent
  }

  get productBlock(){
    return this.#productBlock
  }

  render(container) {
    this.#container = container
    this.#productBlock = document.createElement('div')
    this.#productBlock.classList.add('template__products-box')
    this.#container.appendChild(this.#productBlock)
  }
}
