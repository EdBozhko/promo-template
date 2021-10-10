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
  onDeletePropertyPress(index) {
    this.#propertyItems.delete(index)
  }

  onPropertiesHover = () => {
    this.#addPropertyButton.button.style.display = 'block'
  }
  onPropertiesHoverOut = () => {
    this.#addPropertyButton.button.style.display = 'none'
  }
  render(container) {
    this.#container = container
    this.#properties = document.createElement('div')

    this.#properties.addEventListener('mouseover', this.onPropertiesHover)
    this.#properties.addEventListener('mouseout', this.onPropertiesHoverOut)

    this.#properties.classList.add('template__product-properties')
    this.#addPropertyButton.render(this.#properties)

    this.#addPropertyButton.button.style.display = 'none'

    this.#container.appendChild(this.#properties)
  }
}
