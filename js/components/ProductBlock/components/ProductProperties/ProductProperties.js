class ProductProperties {
  #container
  #properties
  #propertyItems
  #newProperty
  #index = 0
  #addPropertyButton
  constructor(onAddPropertyClick) {
    this.#addPropertyButton = new AddPropertyButton(
      onAddPropertyClick,
      '+',
      this
    )
    this.#propertyItems = new Map()
  }

  get properties() {
    return this.#properties
  }

  onAddPropertyPress = (containerId) => {
    this.#index++
    this.#newProperty = new ProductProperty(this, this.#index, 'Властивість')
    this.#propertyItems.set(this.#index, this.#newProperty)
    this.#newProperty.render(containerId)
  }
  onDeletePropertyPress() {
    this.#propertyItems.delete(this.#index)
  }
  render(container) {
    this.#container = container
    this.#properties = document.createElement('div')
    this.#properties.classList.add('template__product-properties')
    this.#addPropertyButton.render(this.#properties)
    this.#container.appendChild(this.#properties)
  }
}
