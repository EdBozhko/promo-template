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
  #templateContainer
  #root
  constructor(parent, index, templateContainer) {
    this.#parent = parent
    this.#index = index
    this.#templateContainer = templateContainer
    this.#root = document.querySelector(':root')
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
      'Жир-ть',
      [100, 400, 900],
      400,
      this.onFontWeightChange
    )
    this.#textDecoration = new Select(
      this.#index,
      this.#selectKey++,
      'Декор',
      ['underline', 'overline', 'line-through'],
      '',
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
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty('--prodTitleFontSize', `${value}px`)
      case GlobalCodeTools:
        return this.#root.style.setProperty('--prodCodeFontSize', `${value}px`)
      case GlobalPropertyTools:
        return this.#root.style.setProperty(
          '--prodPropertiesFontSize',
          `${value}px`
        )
      default:
        return (this.#parent.parent.style.fontSize = `${value}px`)
    }
  }
  onFontWeightChange = (value) => {
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty('--prodTitleFontWeight', value)
      case GlobalCodeTools:
        return this.#root.style.setProperty('--prodCodeFontWeight', value)
      case GlobalPropertyTools:
        return this.#root.style.setProperty('--prodPropertiesFontWeight', value)
      default:
        return (this.#parent.parent.style.fontWeight = value)
    }
  }
  onColorChange = (value) => {
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty('--prodTitleTextColor', value)
      case GlobalCodeTools:
        return this.#root.style.setProperty('--prodCodeTextColor', value)
      case GlobalPropertyTools:
        return this.#root.style.setProperty('--prodPropertiesColor', value)
      default:
        return (this.#parent.parent.style.color = value)
    }
  }

  onTextDecorationChange = (value) => {
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty('--prodTitleTextDecoration', value)
      case GlobalCodeTools:
        return this.#root.style.setProperty('--prodCodeTextDecoration', value)
      case GlobalPropertyTools:
        return this.#root.style.setProperty(
          '--prodPropertiesTextDecoration',
          value
        )
      default:
        return (this.#parent.parent.style.textDecoration = value)
    }
  }
  onTextDecorationThicknessChange = (value) => {
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty(
          '--prodTitleTextDecorationThickness',
          `${value}px`
        )
      case GlobalCodeTools:
        return this.#root.style.setProperty(
          '--prodCodeTextDecorationThickness',
          `${value}px`
        )
      case GlobalPropertyTools:
        return this.#root.style.setProperty(
          '--prodPropertiesTextDecorationThickness',
          `${value}px`
        )
      default:
        return (this.#parent.parent.style.textDecorationThickness = `${value}px`)
    }
  }
  onTextDecorationColorChange = (value) => {
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty(
          '--prodTitleTextDecorationColor',
          value
        )
      case GlobalCodeTools:
        return this.#root.style.setProperty(
          '--prodCodeTextDecorationColor',
          value
        )
      case GlobalPropertyTools:
        return this.#root.style.setProperty(
          '--prodPropertiesTextDecorationColor',
          value
        )
      default:
        return (this.#parent.parent.style.textDecorationColor = value)
    }
  }

  onBackgroundColorChange = (value) => {
    switch (this.constructor) {
      case GlobalTitleTools:
        return this.#root.style.setProperty('--prodTitleTextBackground', value)
      case GlobalCodeTools:
        return this.#root.style.setProperty('--prodCodeTextBackground', value)
      case GlobalPropertyTools:
        return this.#root.style.setProperty(
          '--prodPropertiesTextBackground',
          value
        )
      default:
        return (this.#parent.parent.style.backgroundColor = value)
    }
  }

  onTextDecorationFocus = () => {
    // debugger
    this.#textDecoration.select.value = ''
    console.log(this.#textDecoration)
  }
  render(container) {
    this.#container = container
    this.#tools = document.createElement('div')
    this.#tools.classList.add('tools')
    this.#tools.style.display = 'none'
    this.#tools.style.zIndex = 999

    this.#fontSize.render(this.#tools)
    this.#fontWeight.render(this.#tools)
    this.#textColor.render(this.#tools)

    this.#textDecoration.render(this.#tools)
    this.#textDecorationThickness.render(this.#tools)
    this.#textDecorationColor.render(this.#tools)

    this.#textDecoration.select.addEventListener(
      'focus',
      this.onTextDecorationFocus
    )

    this.#backgroundColor.render(this.#tools)

    this.#closeButton.render(this.#tools)
    this.#container.appendChild(this.#tools)
  }
}
