class ClosesButton extends Button {
  #container
  #onButtonClick
  #parent
  constructor(onButtonClick, buttonName, buttonType, parent) {
    super(onButtonClick, buttonName, buttonType)
    this.#parent = parent
  }
  onButtonClick = () => {
    this.#parent.onCloseButtonPress()
  }
  render(container) {
    super.render(container)
    super.button.classList.add('tools__close-button')
  }
}
