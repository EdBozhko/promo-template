class TemplateSettings {
  #container
  #settings
  #addProductButton
  #templateContainer
  #screenshotButton
  #index = 0
  #titleTools
  #codeTools
  #propertyTools
  #globalProdNameToolTitle
  #globalProdCodeToolTitle
  #globalProdPropsToolTitle
  #columnsQuantity
  #columnsQuantityTitle
  #option
  #root
  constructor(templateContainer, onAddButtonClick) {
    this.#root = document.querySelector(':root')
    this.#option = new Option()
    this.#templateContainer = templateContainer
    this.#addProductButton = new AddProductButton(
      onAddButtonClick,
      'Додати товар',
      this.#templateContainer
    )
    this.#screenshotButton = new Button(
      this.onScreenShotClick,
      'ScreenShot',
      'screenshot'
    )
    this.#titleTools = new GlobalTitleTools(
      this,
      this.#index++,
      this.#templateContainer
    )
    this.#codeTools = new GlobalCodeTools(
      this,
      this.#index++,
      this.#templateContainer
    )
    this.#propertyTools = new GlobalPropertyTools(
      this,
      this.#index++,
      this.#templateContainer
    )
  }
  onScreenShotClick = () => {
    html2canvas(document.getElementById('the_canvas_element_id')).then(
      (canvas) => {
        let img = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream')
        window.location.href = img
      }
    )
  }
  onColumnQuantityChange = () => {
    this.#root.style.setProperty(
      '--columnsQuantity',
      +this.#columnsQuantity.value
    )
  }
  render(container) {
    this.#container = container
    this.#settings = document.createElement('div')
    this.#settings.classList.add('template__settings')

    this.#addProductButton.render(this.#settings)
    this.#addProductButton.button.setAttribute('title', 'Додати новий товар')

    this.#screenshotButton.render(this.#settings)
    this.#screenshotButton.button.setAttribute(
      'title',
      'Зберігти пропозицію зображенням'
    )
    this.#screenshotButton.button.classList.add('template__screenshot')

    this.#globalProdNameToolTitle = document.createElement('span')
    this.#globalProdCodeToolTitle = document.createElement('span')
    this.#globalProdPropsToolTitle = document.createElement('span')
    this.#columnsQuantityTitle = document.createElement('span')

    this.#columnsQuantityTitle.innerText = 'Кіль-ть колонок'
    this.#settings.appendChild(this.#columnsQuantityTitle)
    this.#columnsQuantity = document.createElement('select')
    this.#columnsQuantity.addEventListener(
      'change',
      this.onColumnQuantityChange
    )
    this.#settings.appendChild(this.#columnsQuantityTitle)
    this.#settings.appendChild(this.#columnsQuantity)

    for (let i = 0; i < 3; i++) {
      this.#option.render(this.#columnsQuantity)
      this.#option.option.innerText = i + 1
      this.#option.option.value = i + 1
    }

    this.#globalProdNameToolTitle.innerText = 'Всі "Назви товарів"'
    this.#settings.appendChild(this.#globalProdNameToolTitle)
    this.#titleTools.render(this.#settings)
    this.#titleTools.tools.setAttribute('title', 'Всі "Назви товарів"')

    this.#globalProdCodeToolTitle.innerText = 'Всі "Коди товарів"'
    this.#settings.appendChild(this.#globalProdCodeToolTitle)
    this.#codeTools.render(this.#settings)
    this.#codeTools.tools.setAttribute('title', 'Всі "Коди товарів"')

    this.#globalProdPropsToolTitle.innerText = 'Всі "Властивості товарів"'
    this.#settings.appendChild(this.#globalProdPropsToolTitle)
    this.#propertyTools.render(this.#settings)
    this.#propertyTools.tools.setAttribute('title', 'Всі "Властивості товарів"')

    this.#container.appendChild(this.#settings)
  }
}
