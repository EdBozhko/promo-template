class Title {
  #title
  #container
  #titleContainer
  constructor(title) {
    this.#title = title
  }
  get titleContainer() {
    return this.#titleContainer
  }
  render(container) {
    this.#container = container
    this.#titleContainer = document.createElement('p')
    this.#titleContainer.textContent = this.#title
    this.#container.appendChild(this.#titleContainer)
  }
}
