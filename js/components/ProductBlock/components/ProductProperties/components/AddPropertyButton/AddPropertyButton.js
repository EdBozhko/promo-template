class AddPropertyButton extends Button {
  #productProperties
  constructor(onButtonClick, buttonName, productProperties) {
    super(onButtonClick, buttonName, 'add-property-button')
    this.#productProperties = productProperties
  }
  onButtonClick() {
    this.#productProperties.onAddPropertyPress(this.#productProperties.properties)
  }
  render(container) {
    super.render(container)
    super.button.classList.add('product__add-property-button')
  }
}
