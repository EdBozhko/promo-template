class ProductCode extends Title {
  constructor(title) {
    super(title)
  }
  render(container) {
    super.render(container)
    super.parent.classList.add('product__code')
    super.parent.setAttribute('contenteditable', 'true')
  }
}
