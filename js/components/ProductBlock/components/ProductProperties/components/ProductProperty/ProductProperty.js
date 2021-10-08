class ProductProperty {
  #container
  #span
  #text
  #index
  #tools
  #parent
  #propertyBox
  #property
  #deleteButton
  constructor(parent, index, text) {
    this.#parent = parent
    this.#text = text
    this.#index = index
    this.#tools = new Tools(this, this.#index)
    this.#deleteButton = new DeletePropertyButton(
      this.onPropertyClosePress,
      'x',
      'delete-property',
      this
    )
  }
  get parent() {
    return this.#property
  }
  onPropertyFocus = () => {
    this.#tools.tools.style.display = 'grid'
  }
  onPropertyClosePress = () => {
    this.#propertyBox.remove()
    this.#parent.onDeletePropertyPress()
  }
  onProperyHover = () => {
    this.#deleteButton.button.style.display = 'block'
  }
  onProperyHoverOut = () => {
    this.#deleteButton.button.style.display = 'none'
  }
  render(container) {
    this.#container = container
    this.#propertyBox = document.createElement('div')
    this.#propertyBox.classList.add('property-box')
    this.#propertyBox.addEventListener('mouseover', this.onProperyHover)
    this.#propertyBox.addEventListener('mouseout', this.onProperyHoverOut)
    this.#deleteButton.render(this.#propertyBox)
    this.#deleteButton.button.style.display = 'none'
    this.#property = document.createElement('span')
    this.#property.addEventListener('focus', this.onPropertyFocus)
    this.#property.classList.add('template__property')
    this.#property.setAttribute('contenteditable', 'true')
    this.#property.innerText = this.#text
    this.#propertyBox.appendChild(this.#property)
    this.#tools.render(this.#propertyBox)
    this.#container.appendChild(this.#propertyBox)
  }
}
