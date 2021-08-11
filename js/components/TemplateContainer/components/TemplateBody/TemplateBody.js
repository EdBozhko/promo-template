class TemplateBody {
  #container
  #body
  #header
  constructor() {
    this.#header = new Header()
  }
  render(container) {
    this.#container = container
    this.#body = document.createElement('div')
    this.#body.classList.add('template__body')
    this.#header.render(this.#body)
    this.#container.appendChild(this.#body)
  }
}
