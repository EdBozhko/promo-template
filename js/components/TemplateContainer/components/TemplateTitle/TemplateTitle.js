class TemplateTitle extends Title {
  constructor(title) {
    super(title)
  }
  render(container) {
    super.render(container)
    super.parent.classList.add('template__title')
    super.parent.setAttribute('contenteditable', 'true')
    super.parent.innerText = 'Назва акції'
  }
}
