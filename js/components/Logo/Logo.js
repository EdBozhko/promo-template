class Logo extends Img {
  constructor(imgSrc) {
    super(imgSrc)
  }
  render(container) {
    super.render(container)
    super.img.classList.add('template__logo')
  }
}
