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
      'Добавить товар',
      this.#templateContainer
    )
    this.#screenshotButton = new Button(this.onScreenShotClick, 'ScreenShot', 'screenshot')
    this.#titleTools = new GlobalTitleTools(this, this.#index++, this.#templateContainer)
    this.#codeTools = new Tools(this, this.#index++)
    this.#propertyTools = new Tools(this, this.#index++)
  }
  onScreenShotClick = () => {
    html2canvas(document.getElementById('the_canvas_element_id')).then(
      (canvas) => {
        let img = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream')
        console.log(img)
        window.location.href = img
      }
    )
  }

  render(container) {
    this.#container = container
    this.#settings = document.createElement('div')
    this.#settings.classList.add('template__settings')
    this.#addProductButton.render(this.#settings)
    this.#screenshotButton.render(this.#settings)
    this.#screenshotButton.button.classList.add('template__screenshot')

    this.#titleTools.render(this.#settings)
    this.#codeTools.render(this.#settings)
    this.#propertyTools.render(this.#settings)

    this.#container.appendChild(this.#settings)
  }
}
