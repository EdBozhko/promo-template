class TemplateSettings {
    #container
#settings
    constructor(){

    }
    render(container){
this.#container = container
this.#settings = document.createElement('div')
this.#settings.classList.add('template__settings')
this.#container.appendChild(this.#settings)
    }
}