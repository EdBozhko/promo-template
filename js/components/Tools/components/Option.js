class Option {
  #parent
  #value
  #container
  #option
  constructor(parent, value) {
    this.#parent = parent
    this.#value = value
  }
  get option() {
    return this.#option
  }
  render(container) {
    this.#container = container
    this.#option = document.createElement('option')
    this.#option.setAttribute('value', `${this.#value}`)
    this.#container.appendChild(this.#option)
  }
}
