class Product {
  #container
  #product
  #productTitle
  #productCode
  #productImg
  #productPropertiesBox
  #imgAndPropertiesBox
  #index
  #templateContainer
  constructor(templateContainer, index) {
    this.#productTitle = new ProductTitle('Назва товару')
    this.#productCode = new ProductCode('Код товару')
    this.#productImg = new ProductImg()
    this.#productPropertiesBox = new ProductProperties()
    this.#index = index
    this.#templateContainer = templateContainer


  }
  render(container) {
    this.#container = container
    this.#product = document.createElement('div')
    this.#product.classList.add('template__product')
    this.#productTitle.render(this.#product)
    this.#productCode.render(this.#product)
    this.#imgAndPropertiesBox = document.createElement('div')
    this.#imgAndPropertiesBox.classList.add('template__img-and-prop')
    this.#productImg.render(this.#imgAndPropertiesBox)
    this.#productPropertiesBox.render(this.#imgAndPropertiesBox)
    this.#product.appendChild(this.#imgAndPropertiesBox)
    this.#container.appendChild(this.#product)
  }
}
