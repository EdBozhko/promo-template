class TemplateBody {
  #container
  #body
  #header
  #productBlock
  #parent
  #templateContainer
  constructor(parent) {
    this.#parent = parent
    this.#templateContainer = parent

    this.#header = new Header()
    this.#productBlock = new ProductBlock(this.#templateContainer, this)
  }

  get productBlock(){
    return this.#productBlock
  }

  render(container) {
    this.#container = container
    this.#body = document.createElement('div')
    this.#body.classList.add('template__body')
    this.#header.render(this.#body)
    this.#productBlock.render(this.#body)
    this.#container.appendChild(this.#body)
  }
}
