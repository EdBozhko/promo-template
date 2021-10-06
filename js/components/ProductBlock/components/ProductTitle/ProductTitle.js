class ProductTitle extends Title {
  constructor(title) {
    super(title)
  }
  render(container) {
    super.render(container)
    super.parent.classList.add('product__title')
    super.parent.setAttribute('contenteditable', 'true')
  }
}
