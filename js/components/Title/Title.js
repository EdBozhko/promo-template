class Title {
  #title
  #container
  #titleContainer
  #tools
  #index
  #titleBox
  constructor(title, index) {
    this.#title = title
    this.#index = index
    this.#tools = new Tools(this, this.#index)
  }
  get titleContainer() {
    return this.#titleContainer
  }
  onTitleFocus =() => {
    this.#tools.tools.style.display = 'flex'
  }
  render(container) {
    this.#container = container
    this.#titleBox = document.createElement('div')
    this.#titleBox.classList.add('title-box')
    this.#titleBox.style.position = 'relative'
    this.#titleContainer = document.createElement('p')
    this.#titleContainer.addEventListener('focus', this.onTitleFocus)
    this.#titleContainer.textContent = this.#title
    this.#titleBox.appendChild(this.#titleContainer)
    this.#tools.render(this.#titleBox)
    this.#container.appendChild(this.#titleBox)
  }
}
