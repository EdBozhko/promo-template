class ProductTitle extends Title {
  constructor(title) {
    super(title)
  }
  render(container) {
    super.render(container)
    super.titleContainer.classList.add('product__title')
    super.titleContainer.setAttribute('contenteditable', 'true')
  }
}
