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
  get productTitle (){
    return this.#productTitle
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
  onImgHover = () => {
    this.#deleteImg.button.style.display = 'block'
  }
  onImgHoverOut = () => {
    this.#deleteImg.button.style.display = 'none'
  }
  onImgDrag =(ev)=>{
    ev.preventDefault();
    this.#imgBox.classList.add('template__img-box--drag')
  }
  onImgDrop = (ev)=>{

    ev.preventDefault();
    this.#imgBox.classList.remove('template__img-box--drag')

    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          this.#inputEvent = ev.dataTransfer.items[i].getAsFile();

          this.#reader.onloadend = () => {
            this.#imgBox.style.background = `url(${
              this.#reader.result
            }) center/contain no-repeat`
          }
      
          if (this.#inputEvent) {
            this.#reader.readAsDataURL(this.#inputEvent)
            this.#input.style.display = 'none'
          } else {
            this.#imgBox.style.background = ''
            this.#input.style.display = 'block'
          }
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
      }
    }
  }
onDragEnterHandler = ()=>{
  this.#imgBox.classList.add('template__img-box--drag')

}
onDragLeveHandler = ()=>{
  this.#imgBox.classList.remove('template__img-box--drag')

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

    this.#imgBox.addEventListener('mouseover', this.onImgHover)
    this.#imgBox.addEventListener('mouseout', this.onImgHoverOut)

    this.#imgBox.addEventListener('dragover', this.onImgDrag)
    this.#imgBox.addEventListener('drop', this.onImgDrop)
    
    this.#imgBox.addEventListener('dragenter', this.onDragEnterHandler)
    
    this.#imgBox.addEventListener('dragleave', this.onDragLeveHandler)
    this.#imgBox.addEventListener('dragend', this.onDragLeveHandler)


    this.#imgBox.classList.add('template__img-box')

    this.#input = document.createElement('input')
    this.#input.setAttribute('type', 'file')
    this.#input.classList.add('template__img-input')
    this.#input.addEventListener('change', this.onImgInputChange)
    this.#deleteImg.render(this.#imgBox)
    this.#deleteImg.button.style.display = 'none'
    this.#imgBox.appendChild(this.#input)

    this.#imgAndPropertiesBox.appendChild(this.#imgBox)
    this.#productPropertiesBox.render(this.#imgAndPropertiesBox)
    this.#product.appendChild(this.#imgAndPropertiesBox)
    this.#container.appendChild(this.#product)
  }
}
