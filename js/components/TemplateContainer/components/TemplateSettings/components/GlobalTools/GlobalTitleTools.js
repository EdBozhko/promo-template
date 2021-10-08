class GlobalTitleTools extends Tools {
    #root
    #templateContainer
  constructor(parent, index, templateContainer) {
    super(parent, index)
    this.#root = document.querySelector(':root')
    this.#templateContainer = templateContainer
  }

  onFontSizeChange = (value) => {
    // this.#parent.parent.style.fontSize = `${value}px`

  }
  onFontWeightChange = (value) => {
    // this.#parent.parent.style.fontWeight = value
  }
  onColorChange = (value) => {
    // this.#parent.parent.style.color = value
  }

  onTextDecorationChange = (value) => {
    // this.#parent.parent.style.textDecoration = value
  }
  onTextDecorationThicknessChange = (value) => {
    // this.#parent.parent.style.textDecorationThickness = `${value}px`
  }
  onTextDecorationColorChange = (value) => {
    // this.#parent.parent.style.textDecorationColor = value
  }

  onBackgroundColorChange = (value) => {
    // this.#parent.parent.style.backgroundColor = value
// this.#templateContainer.poductItems[i].productTitle = value
  }

  render(container) {
    super.render(container)
  }
}
