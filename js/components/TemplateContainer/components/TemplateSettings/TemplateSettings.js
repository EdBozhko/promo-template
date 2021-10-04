class TemplateSettings {
  #container
  #settings
  #addProductButton
  #templateContainer
  constructor(templateContainer, onAddButtonClick) {
    this.#templateContainer = templateContainer
      this.#addProductButton = new AddProductButton(onAddButtonClick, 'Добавить товар', this.#templateContainer)
  }
  render(container) {

    this.#container = container
    this.#settings = document.createElement('div')
    this.#settings.classList.add('template__settings')
    this.#addProductButton.render(this.#settings)
    this.#container.appendChild(this.#settings)
  }
}
