function newElement(setTag, setElementsQuantity, setAttribute, setAttributeValue, setPlaceToInsert) {
    for (let i = 0; i < setElementsQuantity; i++) {
        const CREATE_TAG = document.createElement(setTag);
        CREATE_TAG.setAttribute(setAttribute, setAttributeValue);
        document.querySelector(setPlaceToInsert).appendChild(CREATE_TAG);
    }
}

window.onload = function () {
    const SECTION_CREATE = newElement('section', 1, 'class', 'main', 'body');
    const DIV_WRAPPER_CREATE = newElement('div', 1, 'class', 'wrapper', '.main');
    const DIV_LIST_CREATE = newElement('ul', 1, 'class', 'template-list', '.wrapper');
    const DIV_TEMPLATE_CONTAINER_CREATE = newElement('div', 1, 'class', 'template-container', '.wrapper');
    const LIST_ITEM_CREATE = newElement('li', 4, 'class', 'template-item', '.template-list')

    const BUTTON_LIST = document.getElementsByClassName('template-item')
    for (let i = 0; i < BUTTON_LIST.length; i++) {
        const BUTTON_CREATE = document.createElement('button')
        BUTTON_CREATE.classList.add('template-button')
        BUTTON_LIST[i].append(BUTTON_CREATE)
    }

    document.querySelector('.template-item:nth-child(1) button').classList.add('template-button--promo-price')
    document.querySelector('.template-item:nth-child(2) button').classList.add('template-button--promo-kit')
    document.querySelector('.template-item:nth-child(3) button').classList.add('template-button--promo-present')
    document.querySelector('.template-item:nth-child(4) button').classList.add('template-button--promo-product')

    document.querySelector('.template-button--promo-price').innerText = 'Акційна ціна'
    document.querySelector('.template-button--promo-kit').innerText = 'Акційний набір'
    document.querySelector('.template-button--promo-present').innerText = 'Акція з подарунком'
    document.querySelector('.template-button--promo-product').innerText = 'Акційні товари'

    document.querySelector('.template-list').addEventListener('click', buttonClick)
}





