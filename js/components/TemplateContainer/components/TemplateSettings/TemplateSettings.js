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
  constructor(templateContainer, onAddButtonClick) {
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

    this.#titleTools.render(this.#settings)
    this.#titleTools.tools.setAttribute('title', 'Всі "Назви товарів"')

    this.#codeTools.render(this.#settings)
    this.#codeTools.tools.setAttribute('title', 'Всі "Коди товарів"')

    this.#propertyTools.render(this.#settings)
    this.#propertyTools.tools.setAttribute('title', 'Всі "Властивості товарів"')

    this.#container.appendChild(this.#settings)
  }
}
