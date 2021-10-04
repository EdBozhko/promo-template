class Header {
  #logo
  #title
  #header
  #container
  constructor() {
    this.#logo = new Logo('./js/components/Logo/assets/Logo.png')
    this.#title = new TemplateTitle()
  }
  render(container) {
    this.#container = container
    this.#header = document.createElement('div')
    this.#header.classList.add('template__header')
    this.#logo.render(this.#header)
    this.#title.render(this.#header)
    this.#container.appendChild(this.#header)
  }
}
