class Tools {
  #parent
  #container
  #index
  #tools
  #fontSize
  #fontWeight
  #textDecoration
  #textColor
  #backgroundColor
  #selectKey = 0
  #colorKey = 0
  constructor(parent, index) {
    this.#parent = parent
    this.#index = index
    this.#fontSize = new Select(
      this.#index,
      this.#selectKey++,
      'Розмір',
      [10, 11, 12],
      10
    )
    this.#fontWeight = new Select(
      this.#index,
      this.#selectKey++,
      'Жирність',
      [100, 400, 900],
      400
    )
    this.#textDecoration = new Select(
      this.#index,
      this.#selectKey++,
      'Декор',
      ['underline', 'overline'],
      'none'
    )
    this.#textColor = new Color(this.#index, this.#colorKey++, 'Текст', '#000000', this.onColorChange)
    this.#backgroundColor = new Color(this.#index, this.#colorKey++, 'Фон', '#000000', this.onBackgroundColorChange)
  }
get tools (){
  return this.#tools
}
onColorChange = (value) =>{
  this.#parent.titleContainer.style.color = value
}
onBackgroundColorChange = (value)=>{
  this.#parent.titleContainer.style.backgroundColor = value
}
  render(container) {
    this.#container = container
    this.#tools = document.createElement('div')
    this.#tools.classList.add('tools')
    this.#tools.style.position = 'absolute'
    this.#tools.style.top = '0'
    this.#tools.style.display = 'none'
    this.#fontSize.render(this.#tools)
    this.#fontWeight.render(this.#tools)
    this.#textDecoration.render(this.#tools)
    this.#textColor.render(this.#tools)
    this.#backgroundColor.render(this.#tools)
    this.#container.appendChild(this.#tools)
  }
}
