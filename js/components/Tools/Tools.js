class Tools {
  #parent
  #container
  #index
  #tools
  #fontSize
  #fontWeight
  #textDecoration
  #textDecorationThickness
  #textDecorationColor
  #textColor
  #backgroundColor
  #selectKey = 0
  #colorKey = 0
  #closeButton
  constructor(parent, index) {
    this.#parent = parent
    this.#index = index
    this.#fontSize = new Select(
      this.#index,
      this.#selectKey++,
      'Розмір',
      [10, 11, 12],
      16,
      this.onFontSizeChange
    )
    this.#fontWeight = new Select(
      this.#index,
      this.#selectKey++,
      'Жирність',
      [100, 400, 900],
      400,
      this.onFontWeightChange
    )
    this.#textDecoration = new Select(
      this.#index,
      this.#selectKey++,
      'Декор',
      ['underline', 'overline', 'line-through'],
      'none',
      this.onTextDecorationChange
    )
    this.#textDecorationThickness = new Select(
      this.#index,
      this.#selectKey++,
      'Декор',
      [1, 2, 5],
      2,
      this.onTextDecorationThicknessChange
    )
    this.#textColor = new Color(
      this.#index,
      this.#colorKey++,
      'Текст',
      '#000000',
      this.onColorChange
    )
    this.#backgroundColor = new Color(
      this.#index,
      this.#colorKey++,
      'Фон',
      '#000000',
      this.onBackgroundColorChange
    )
    this.#textDecorationColor = new Color(
      this.#index,
      this.#colorKey++,
      'Декор',
      '#000000',
      this.onTextDecorationColorChange
    )
    this.#closeButton = new ClosesButton(
      this.onCloseButtonPress,
      'x',
      'close',
      this
    )
  }
  get tools() {
    return this.#tools
  }
  onCloseButtonPress = () => {
    this.#tools.style.display = 'none'
  }
  onFontSizeChange = (value) => {
    this.#parent.parent.style.fontSize = `${value}px`
  }
  onFontWeightChange = (value) => {
    this.#parent.parent.style.fontWeight = value
  }
  onTextDecorationChange = (value) => {
    this.#parent.parent.style.textDecoration = value
  }
  onTextDecorationThicknessChange = (value) => {
    this.#parent.parent.style.textDecorationThickness = `${value}px`
  }
  onColorChange = (value) => {
    this.#parent.parent.style.color = value
  }
  onBackgroundColorChange = (value) => {
    this.#parent.parent.style.backgroundColor = value
  }
  onTextDecorationColorChange = (value) => {
    this.#parent.parent.style.textDecorationColor = value
  }
  render(container) {
    this.#container = container
    this.#tools = document.createElement('div')
    this.#tools.classList.add('tools')
    this.#tools.style.display = 'none'
    this.#tools.style.zIndex = 999
    this.#fontSize.render(this.#tools)
    this.#fontWeight.render(this.#tools)
    this.#textDecoration.render(this.#tools)
    this.#textDecorationThickness.render(this.#tools)
    this.#textDecorationColor.render(this.#tools)
    this.#textColor.render(this.#tools)
    this.#backgroundColor.render(this.#tools)
    this.#closeButton.render(this.#tools)
    this.#container.appendChild(this.#tools)
  }
}
