class Product {
  #container
  #product
  #productTitle
  #productCode
  #productPropertiesBox
  #imgAndPropertiesBox
  #index
  #templateContainer
  #imgBox
  #input
  #inputEvent
  #reader
  #deleteImg
  constructor(templateContainer, index) {
    this.#productTitle = new ProductTitle('Назва товару')
    this.#productCode = new ProductCode('Код товару')
    this.#productPropertiesBox = new ProductProperties()
    this.#index = index
    this.#templateContainer = templateContainer
    this.#reader = new FileReader()
    this.#deleteImg = new DeletePropertyButton(
      this.onDeleteImgPress,
      'x',
      'delete-img',
      this
    )
  }
  onDeleteImgPress = () => {
    this.#imgBox.style.background = ''
    this.#input.style.display = 'block'
    this.#inputEvent.value = ''
  }
  onImgInputChange = (event) => {
    this.#inputEvent = event.target
    console.log(this.#inputEvent)
    this.#reader.onloadend = () => {
      this.#imgBox.style.background = `url(${
        this.#reader.result
      }) center/contain no-repeat`
    }

    if (this.#inputEvent.files[0]) {
      this.#reader.readAsDataURL(this.#inputEvent.files[0])
      this.#input.style.display = 'none'
    } else {
      this.#imgBox.style.background = ''
      this.#input.style.display = 'block'
    }
  }
  render(container) {
    this.#container = container
    this.#product = document.createElement('div')
    this.#product.classList.add('template__product')
    this.#productTitle.render(this.#product)
    this.#productCode.render(this.#product)
    this.#imgAndPropertiesBox = document.createElement('div')
    this.#imgAndPropertiesBox.classList.add('template__img-and-prop')
    this.#imgBox = document.createElement('div')
    this.#imgBox.classList.add('template__img-box')

    this.#input = document.createElement('input')
    this.#input.setAttribute('type', 'file')
    this.#input.classList.add('template__img-input')
    this.#input.addEventListener('change', this.onImgInputChange)
    this.#deleteImg.render(this.#imgBox)
    this.#imgBox.appendChild(this.#input)

    this.#imgAndPropertiesBox.appendChild(this.#imgBox)
    this.#productPropertiesBox.render(this.#imgAndPropertiesBox)
    this.#product.appendChild(this.#imgAndPropertiesBox)
    this.#container.appendChild(this.#product)
  }
}
