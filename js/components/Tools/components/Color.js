class Color {
  #container
  #index
  #tool_name
  #defaultValue
  #key
  #input
  #label
  #onColorChange
  constructor(index, key, tool_name, defaultValue, onColorChange) {
    this.#index = index
    this.#tool_name = tool_name
    this.#defaultValue = defaultValue
    this.#key = key
    this.#onColorChange = onColorChange
  }

  onInputChange = ()=>{
    this.#onColorChange(this.#input.value);
  }

  render(container) {
    this.#container = container
    this.#label = document.createElement('label')
    this.#label.classList.add('tools__label')
    this.#label.classList.add('tools__label--color')
    this.#input = document.createElement('input')
    this.#input.addEventListener('change', this.onInputChange)
    this.#input.setAttribute('type', 'color')
    this.#input.setAttribute('id', `color-prod-${this.#index}-${this.#key}`)
    this.#input.setAttribute('value', this.#defaultValue)
    this.#label.textContent = this.#tool_name
    this.#label.appendChild(this.#input)
    this.#container.appendChild(this.#label)
  }
}
