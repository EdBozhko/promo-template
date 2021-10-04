class Button {
  #onButtonClick
  #container
  #button
  #buttonName
  #buttonType
  constructor(onButtonClick, buttonName, buttonType) {
    this.#onButtonClick = onButtonClick
    this.#buttonName = buttonName
    this.#buttonType = buttonType
  }
  onButtonClick(event) {
    this.#onButtonClick(this, event)
  }

  get button (){
      return this.#button
  }

  render(container) {
    this.#container = container
    this.#button = document.createElement('button')
    this.#button.classList.add('button')
    this.#button.innerText = this.#buttonName
    this.#button.addEventListener('click', this.onButtonClick.bind(this));
    this.#container.appendChild(this.#button)
  }
}
