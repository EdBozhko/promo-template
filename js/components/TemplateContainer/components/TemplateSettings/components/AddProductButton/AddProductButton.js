class AddProductButton extends Button {
    #templateContainer
    constructor(onButtonClick,buttonName,templateContainer){
        super(onButtonClick,buttonName, 'add-product-button')
        this.#templateContainer = templateContainer
    }
    onButtonClick() {
        this.#templateContainer.onAddButtonPress(this.#templateContainer.body.productBlock.productBlock)
      }
    render(container){
        super.render(container)
        super.button.classList.add('template__add-product-button');
    }
}