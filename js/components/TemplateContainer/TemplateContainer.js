class TemplateContainer {
  #container
  #body
  #settings
  #templateContainer
  constructor() {
    this.#body = new TemplateBody()
    this.#settings = new TemplateSettings()
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
a.render(document.getElementById( 'container'))