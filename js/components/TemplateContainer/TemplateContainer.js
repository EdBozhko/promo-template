class TemplateContainer {
  #container
  #body
  #settings
  #templateContainer
  #productItems
  #index = 0
  #newProduct
  constructor() {
    this.#body = new TemplateBody(this)
    this.#settings = new TemplateSettings(this)
    this.#productItems = new Map()
  }

  get template() {
    return this
  }

  get templateContainer() {
    return this.#templateContainer
  }

  get body() {
    return this.#body
  }

  get poductItems() {
    return this.#productItems
  }

  onAddButtonPress = (containerId) => {
    this.#index++
    this.#newProduct = new Product(this, this.#index)
    this.#productItems.set(this.#index, this.#newProduct)
    this.#newProduct.render(containerId)
  }

  render(container) {
    this.#container = container
    this.#templateContainer = document.createElement('div')
    this.#templateContainer.classList.add('template__container')
    this.#body.render(this.#templateContainer)
    this.#settings.render(this.#templateContainer)
    this.#container.appendChild(this.#templateContainer)
  }
}
const a = new TemplateContainer()
a.render(document.getElementById('container'))
