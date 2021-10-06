class Select {
  #container
  #select
  #label
  #input
  #index
  #tool_name
  #optionsList
  #options = []
  #option
  #defaultValue
  #key
  #onSelectChange
  constructor(
    index,
    key,
    tool_name,
    optionsList,
    defaultValue,
    onSelectChange
  ) {
    this.#index = index
    this.#tool_name = tool_name
    this.#optionsList = optionsList
    this.#defaultValue = defaultValue
    this.#key = key
    this.#onSelectChange = onSelectChange
    for (let i = 0; i < this.#optionsList.length; i++) {
      this.#option = new Option(this, this.#optionsList[i])
      this.#options.push(this.#option)
    }
  }
  onSelectChange = () => {
    this.#onSelectChange(this.#input.value)
  }
  render(container) {
    this.#container = container
    this.#label = document.createElement('label')
    this.#label.classList.add('tools__label')
    this.#label.classList.add('tools__label--select')
    this.#input = document.createElement('input')

    this.#input.addEventListener('change', this.onSelectChange)

    this.#input.classList.add('tools__input--select')

    this.#input.setAttribute('prod', `select-prod-${this.#index}`)
    this.#input.setAttribute('list', `select-prod-${this.#index}-${this.#key}`)

    this.#input.setAttribute('value', this.#defaultValue)
    this.#select = document.createElement('datalist')
    this.#select.classList.add('tools__select')

    this.#select.setAttribute('prod', `select-prod-${this.#index}`)
    this.#select.setAttribute('id', `select-prod-${this.#index}-${this.#key}`)

    for (let j = 0; j < this.#options.length; j++) {
      this.#options[j].render(this.#select)
    }

    this.#label.textContent = this.#tool_name
    this.#label.appendChild(this.#input)
    this.#label.appendChild(this.#select)
    this.#container.appendChild(this.#label)
  }
}
