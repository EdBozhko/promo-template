class DeletePropertyButton extends Button {
  #container
  #onButtonClick
  #parent
  constructor(onButtonClick, buttonName, buttonType, parent) {
    super(onButtonClick, buttonName, buttonType)
    this.#parent = parent
    this.#onButtonClick = onButtonClick
  }
  onButtonClick = () => {
    this.#onButtonClick()
  }
  render(container) {
    super.render(container)
    super.button.classList.add('tools__delete-button')
  }
}
