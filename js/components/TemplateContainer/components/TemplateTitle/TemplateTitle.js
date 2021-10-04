class TemplateTitle extends Title {
  constructor(title) {
    super(title)
  }
  render(container) {
    super.render(container)
    super.titleContainer.classList.add('template__title')
    super.titleContainer.setAttribute('contenteditable', 'true')
    super.titleContainer.innerText = 'Назва акції'
  }
}
