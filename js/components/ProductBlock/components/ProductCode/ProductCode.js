class ProductCode extends Title {
  constructor(title) {
    super(title)
  }
  render(container) {
    super.render(container)
    super.titleContainer.classList.add('product__code')
  }
}
