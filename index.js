// Програма для створення комерційних пропозицій на основів шаблонів. 
// 1. Обираємо вид шаблону. 
// 2. У панелі налаштувань зправа заповнбємо всі поля, обираємо фото товару.
// 3. Зліва автоматично сформується готовий шаблон
// 4. Інпути і поля пов'язані значеннями атребутів key та id

function newElement(setTag, setElementsQuantity, setAttribute, setAttributeValue, setPlaceToInsert) {  // функція для швидкого масового створення нових елементів, в яку одразу задається тег, кількість нових елементів, задається атрибут, значення атрибуту, куди помістити елементи (querySelector)
    for (let i = 0; i < setElementsQuantity; i++) {   // передається кількість нових елементів
        const CREATE_TAG = document.createElement(setTag);   // передається тег елементів, які створюємо
        CREATE_TAG.setAttribute(setAttribute, setAttributeValue); // передаються атрибут та його значення
        document.querySelector(setPlaceToInsert).appendChild(CREATE_TAG); // передається куди розмістити нові елементи
    }
}

window.onload = function () {   // функція запускається після завантаження сторінки
    newElement('section', 1, 'class', 'main', 'body');   // створюється новий елемент, основний розділ
    newElement('div', 1, 'class', 'wrapper', '.main');  // створюється новий елемент, контейнер центровщик
    newElement('ul', 1, 'class', 'template-list', '.wrapper');   // створюється новий елемент, список кнопок-шаблонів
    newElement('li', 4, 'class', 'template-item', '.template-list')   // створюється новий елемент, пункти списку кнопок-шаблони
    newElement('div', 1, 'class', 'template-container', '.wrapper');   // створюється новий елемент, контейнер для шаблона

    const BUTTON_LIST = document.getElementsByClassName('template-item')   // знаходимо всі пункти списку кнопок-шаблонів
    for (let i = 0; i < BUTTON_LIST.length; i++) {
        const BUTTON_CREATE = document.createElement('button') // створюємо кнопки-шаблони
        BUTTON_CREATE.classList.add('template-button')   // додаємо кнопкам клас
        if (i == 0) {
          BUTTON_CREATE.classList.add('template-button--promo-price')  // задаємо першій кнопці клас
          BUTTON_CREATE.innerText = 'Акційна ціна'   // задамо назву кнопці
        }
        if (i == 1) {
          BUTTON_CREATE.classList.add('template-button--promo-kit')  // задаємо першій кнопці клас
          BUTTON_CREATE.innerText = 'Акційний набір'  // задамо назву кнопці
        }
        if (i == 2) {
          BUTTON_CREATE.classList.add('template-button--promo-four-products')  // задаємо першій кнопці клас
          BUTTON_CREATE.innerText = 'Акційні товари'   // задамо назву кнопці
        }
        if (i == 3) {
          BUTTON_CREATE.classList.add('template-button--promo-set')  // задаємо першій кнопці клас
          BUTTON_CREATE.innerText = 'Акція на набір'  // задамо назву кнопці
        }

        BUTTON_LIST[i].append(BUTTON_CREATE)   // поміщамо кнопки у пункти списку
    }
    
    document.querySelector('.template-button--promo-price').addEventListener('click', templatePrice)  // додамо прослуховувач подій на кнопку з викликом відповідної функції створення шаблону
    document.querySelector('.template-button--promo-kit').addEventListener('click', templateKit)  // додамо прослуховувач подій на кнопку з викликом відповідної функції створення шаблону
    document.querySelector('.template-button--promo-four-products').addEventListener('click', templateFourProducts)  // додамо прослуховувач подій на кнопку з викликом відповідної функції створення шаблону
    document.querySelector('.template-button--promo-set').addEventListener('click', templateSet)  // додамо прослуховувач подій на кнопку з викликом відповідної функції створення шаблону
}

function templatePrice() {   // функція створення шаблону
    document.querySelector('.template-container').innerHTML = ''; // очищаємо контейнер шаблону

    newElement('div', 2, 'class', 'template-price', '.template-container')   // створюмо 2 контейнери для шаблону та налаштувань
    document.querySelector('.template-price:first-child').classList.add('template-price__content')  // додаємо класи контейнерам
    document.querySelector('.template-price:last-child').classList.add('template-price__configurations')  // додаємо класи контейнерам

    newElement('div', 5, 'class', 'template-price__areas', '.template-price__content')  // створюємо 5 конейнерів для шаблону
    document.querySelector('.template-price__areas:nth-child(1)').classList.add('template-price__areas--logo')  // додаємо класи контейнерам
    document.querySelector('.template-price__areas:nth-child(2)').classList.add('template-price__areas--product-name')  // додаємо класи контейнерам
    document.querySelector('.template-price__areas:nth-child(3)').classList.add('template-price__areas--photo')  // додаємо класи контейнерам
    document.querySelector('.template-price__areas:nth-child(4)').classList.add('template-price__areas--description')  // додаємо класи контейнерам
    document.querySelector('.template-price__areas:nth-child(5)').classList.add('template-price__areas--prices')  // додаємо класи контейнерам
    
    newElement('img', 1, 'class', 'template-price__logo', '.template-price__areas--logo')  // сторюємо та додаємо елемент для лого
    const FIND_LOGO = document.querySelector('.template-price__logo')  // знаходимо елемент лого
    FIND_LOGO.setAttribute('id', 'logo') // задаємо атрибут id лого
    FIND_LOGO.setAttribute('src', './img/YUGCONTRACT_Logo.png') // прописуємо шлях для лого за замовчуванням


    // створюємо елементи шаблону, заносимо їх у відповідні контейнери, додаємо цим елементам класи та id
    newElement('p', 1, 'class', 'template-price__promo-name', '.template-price__areas--logo')
    document.querySelector('.template-price__promo-name').setAttribute('id', 'promo-name')

    newElement('img', 1, 'class', 'template-price__photo', '.template-price__areas--photo')
    document.querySelector('.template-price__photo').setAttribute('id', 'photo')

    newElement('p', 1, 'class', 'template-price__product-name', '.template-price__areas--product-name')
    document.querySelector('.template-price__product-name').setAttribute('id', 'name')

    newElement('p', 1, 'class', 'template-price__description', '.template-price__areas--description')
    document.querySelector('.template-price__description').setAttribute('id', 'description')

    newElement('span', 1, 'class', 'template-price__code', '.template-price__areas--product-name')
    document.querySelector('.template-price__code').setAttribute('id', 'code')

    newElement('span', 1, 'class', 'template-price__old-price', '.template-price__areas--prices')
    document.querySelector('.template-price__old-price').setAttribute('id', 'old-price')
    
    newElement('span', 1, 'class', 'template-price__new-price', '.template-price__areas--prices')
    document.querySelector('.template-price__new-price').setAttribute('id', 'new-price')
    
    newElement('span', 1, 'class', 'template-price__recommended-price', '.template-price__areas--prices')
    document.querySelector('.template-price__recommended-price').setAttribute('id', 'recommended-price')
    
    newElement('span', 1, 'class', 'template-price__name-old-price', '.template-price__areas--prices')
    document.querySelector('.template-price__name-old-price').innerText = 'Стара ціна:'

    newElement('span', 1, 'class', 'template-price__name-new-price', '.template-price__areas--prices')
    document.querySelector('.template-price__name-new-price').innerText = 'Нова ціна:'

    newElement('span', 1, 'class', 'template-price__name-recommended-price', '.template-price__areas--prices')
    document.querySelector('.template-price__name-recommended-price').innerText = 'РРЦ:'

  const CONFIGURATIONS_FIELD = document.querySelector('.template-price__configurations') // знаходимо конейнер з налаштуваннями

  for (let i = 0; i < 9; i++) {
    const CREATE_LABEL = document.createElement('label')  // створюємо лейбли для інпутів
    CREATE_LABEL.classList.add('template-price__label')  // задаємо лейблам класи
    let createInput // створюємо змінну створення інпуту
    if (i == 0) {
      CREATE_LABEL.innerText = 'Додати логотип'  // додамо назву лейбла
      createInput = document.createElement('input') // створюємо інпути
      createInput.classList.add('template-price__add-logo')  // додаємо клас інпуту
      createInput.setAttribute('type', 'file')  // задаємо тип інпуту
      createInput.setAttribute('key', 'logo')  // задаємо ключ інпуту
    }
    if (i == 1) {
      CREATE_LABEL.innerText = 'Додати назву акції'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-promo-name')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'promo-name')

    }
    if (i == 2) {
      CREATE_LABEL.innerText = 'Додати фото товару'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-photo')
      createInput.setAttribute('type', 'file')
      createInput.setAttribute('key', 'photo')

    }
    if (i == 3) {
      CREATE_LABEL.innerText = 'Додати назву товару'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-name')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'name')

    }
    if (i == 4) {
      CREATE_LABEL.innerText = 'Додати код товару'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-code')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'code')

    }
    if (i == 5) {
      CREATE_LABEL.innerText = 'Додати опис'
      createInput = document.createElement('textarea')
      createInput.classList.add('template-price__add-description')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'description')

    }
    if (i == 6) {
      CREATE_LABEL.innerText = 'Додати стару ціну'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-old-price')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'old-price')

    }
    if (i == 7) {
      CREATE_LABEL.innerText = 'Додати нову ціну'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-new-price')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'new-price')
      
    }
    if (i == 8) {
      CREATE_LABEL.innerText = 'Додати РРЦ'
      createInput = document.createElement('input')
      createInput.classList.add('template-price__add-recommended-price')
      createInput.setAttribute('type', 'text')
      createInput.setAttribute('key', 'recommended-price')

    }
    
    CREATE_LABEL.appendChild(createInput)  // додаємо інпути у лейбли
    CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL) // додаємо лейбли у контейнер з налаштуваннями
  }

    CONFIGURATIONS_FIELD.addEventListener('change', setValuesForTemplate)  // навішуємо на контейнер прослуховувач подій для запуску функції передачі значень інпутів при їх зміні, у шаблон
}

function templateKit() {   // функція створення шаблону
    document.querySelector('.template-container').innerHTML = ''; // очищаємо контейнер шаблону

    newElement('div', 2, 'class', 'template-kit', '.template-container')   // створюмо 2 контейнери для шаблону та налаштувань
    document.querySelector('.template-kit:first-child').classList.add('template-kit__content')  // додаємо класи контейнерам
    document.querySelector('.template-kit:last-child').classList.add('template-kit__configurations')  // додаємо класи контейнерам
// створюємо контейнери шаблону
    for (let l = 0; l < 4; l++) {
      const CREATE_DIV_AREAS = document.createElement('div')  // створюємо контейнер шаблону
      CREATE_DIV_AREAS.classList.add('template-kit__areas')  // додаємо клас контейнеру
      if (l == 0) { // задаємо окрему умову для конейнера з лого
        CREATE_DIV_AREAS.classList.add('template-kit__areas--logo')
        
        const CREATE_IMAGE_FOR_LOGO = document.createElement('img')
        CREATE_IMAGE_FOR_LOGO.classList.add('template-kit__logo')
        CREATE_IMAGE_FOR_LOGO.setAttribute('id', 'logo')
        CREATE_IMAGE_FOR_LOGO.setAttribute('src', './img/YUGCONTRACT_Logo.png')
        CREATE_DIV_AREAS.appendChild(CREATE_IMAGE_FOR_LOGO)
  
        const CREATE_PARAGRAPH_FOR_PROMO_NAME = document.createElement('p')
        CREATE_PARAGRAPH_FOR_PROMO_NAME.classList.add('template-kit__promo-name')
        CREATE_PARAGRAPH_FOR_PROMO_NAME.setAttribute('id', 'promo-name')
        CREATE_DIV_AREAS.appendChild(CREATE_PARAGRAPH_FOR_PROMO_NAME)
      } 
      else { // створюмо умову для контейнерів з товарами, та наповнюємо їх
        CREATE_DIV_AREAS.classList.add(`template-kit__areas__product-${l}`)
        
        const CREATE_IMAGE_CONTAINER = document.createElement('div')
        CREATE_IMAGE_CONTAINER.classList.add('template-kit__image-container')

        const CREATE_IMAGE = document.createElement('img')
        CREATE_IMAGE.classList.add('template-kit__photo')
        CREATE_IMAGE.setAttribute('id', `photo-${l}`)

        const CREATE_DESCRIPTION_CONTAINER = document.createElement('div')
        CREATE_DESCRIPTION_CONTAINER.classList.add('template-kit__properties-container')
        
        const CREATE_PARAGRAPH_NAME = document.createElement('p')
        CREATE_PARAGRAPH_NAME.classList.add('template-kit__name')
        CREATE_PARAGRAPH_NAME.setAttribute('id', `product-name-${l}`)

        const CREATE_SPAN_CODE = document.createElement('span')
        CREATE_SPAN_CODE.classList.add('template-kit__code')
        CREATE_SPAN_CODE.setAttribute('id', `code-${l}`)

        const CREATE_DESCRIPTION = document.createElement('p')
        CREATE_DESCRIPTION.classList.add('template-kit__description')
        CREATE_DESCRIPTION.setAttribute('id', `description-${l}`)

        const CREATE_SPAN_PRICE_NAME = document.createElement('span')
        CREATE_SPAN_PRICE_NAME.classList.add('template-kit__name-price')
        CREATE_SPAN_PRICE_NAME.innerText = 'Ваша ціна:' 

        const CREATE_SPAN_PRICE_VALUE = document.createElement('span')
        CREATE_SPAN_PRICE_VALUE.classList.add('template-kit__price')
        CREATE_SPAN_PRICE_VALUE.setAttribute('id', `price-${l}`)

        const CREATE_SPAN_RECOMMENDED_PRICE_NAME = document.createElement('span')
        CREATE_SPAN_RECOMMENDED_PRICE_NAME.classList.add('template-kit__name-recommended-price')
        CREATE_SPAN_RECOMMENDED_PRICE_NAME.innerText = 'РРЦ:'  

        const CREATE_SPAN_RECOMMENDED_PRICE_VALUE = document.createElement('span')
        CREATE_SPAN_RECOMMENDED_PRICE_VALUE.classList.add('template-kit__recommended-price')
        CREATE_SPAN_RECOMMENDED_PRICE_VALUE.setAttribute('id', `recommended-price-${l}`)

        CREATE_DIV_AREAS.appendChild(CREATE_IMAGE_CONTAINER)
        CREATE_DIV_AREAS.appendChild(CREATE_DESCRIPTION_CONTAINER)
        CREATE_IMAGE_CONTAINER.appendChild(CREATE_IMAGE)
    
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_PARAGRAPH_NAME)
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_CODE)
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_DESCRIPTION)
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_PRICE_NAME)
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_PRICE_VALUE)
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_RECOMMENDED_PRICE_NAME)
        CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_RECOMMENDED_PRICE_VALUE)
      }
      document.querySelector('.template-kit__content').appendChild(CREATE_DIV_AREAS)
    }
// окремо створюємо інпути для лого та назви акції
const CONFIGURATIONS_FIELD = document.querySelector('.template-kit__configurations')
const PRODUCT_CONTAINERS = document.querySelectorAll('.template-kit__areas')

const CREATE_LABEL_FOR_LOGO_INPUT = document.createElement('label')
CREATE_LABEL_FOR_LOGO_INPUT.classList.add('template-kit__label')
CREATE_LABEL_FOR_LOGO_INPUT.innerText = 'Додати лого'
CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL_FOR_LOGO_INPUT)

const CREATE_INPUT_FOR_LOGO = document.createElement('input')
CREATE_INPUT_FOR_LOGO.classList.add('template-kits__add-logo')
CREATE_INPUT_FOR_LOGO.setAttribute('key', 'logo')
CREATE_INPUT_FOR_LOGO.setAttribute('type', 'file')
CREATE_LABEL_FOR_LOGO_INPUT.appendChild(CREATE_INPUT_FOR_LOGO)

const CREATE_LABEL_FOR_PROMO_NAME_INPUT = document.createElement('label')
CREATE_LABEL_FOR_PROMO_NAME_INPUT.classList.add('template-kit__label')
CREATE_LABEL_FOR_PROMO_NAME_INPUT.innerText = 'Додати назву акції'
CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL_FOR_PROMO_NAME_INPUT)

const CREATE_INPUT_FOR_PROMO_NAME = document.createElement('input')
CREATE_INPUT_FOR_PROMO_NAME.classList.add('template-kit__add-promo-name')
CREATE_INPUT_FOR_PROMO_NAME.setAttribute('key', 'promo-name')
CREATE_INPUT_FOR_PROMO_NAME.setAttribute('type', 'text')
CREATE_LABEL_FOR_PROMO_NAME_INPUT.appendChild(CREATE_INPUT_FOR_PROMO_NAME)
// створюємо інпути для кожного товару за шаблоном
  for (let j = 1; j < PRODUCT_CONTAINERS.length; j++) {
    for (let l = 0; l < 6; l++) {
      const CREATE_LABEL = document.createElement('label')  // створюємо лейбли для інпутів
      CREATE_LABEL.classList.add('template-kit__label')  // задаємо лейблам класи
      if (l == 0) {
        CREATE_LABEL.innerText = `Додати назву товару №${j}`  // додамо назву лейбла
        const CREATE_INPUT = document.createElement('input') // створюємо інпути
        CREATE_INPUT.classList.add('template-kit__add-product-name')  // додаємо клас інпуту
        CREATE_INPUT.setAttribute('type', 'text')  // задаємо тип інпуту
        CREATE_INPUT.setAttribute('key', `product-name-${j}`)  // задаємо ключ інпуту
        CREATE_LABEL.appendChild(CREATE_INPUT)  // додаємо інпути у лейбли
      }
      if (l == 1) {
        CREATE_LABEL.innerText = `Додати код товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-kit__add-code')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `code-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 2) {
        CREATE_LABEL.innerText = `Додати фото товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-kit__add-photo')
        CREATE_INPUT.setAttribute('type', 'file')
        CREATE_INPUT.setAttribute('key', `photo-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 3) {
        CREATE_LABEL.innerText = `Додати опис товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-kit__add-description')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `description-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 4) {
        CREATE_LABEL.innerText = `Додати ціну товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-kit__add-price')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `price-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 5) {
        CREATE_LABEL.innerText = `Додати РРЦ №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-kit__add-recommended-price')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `recommended-price-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL)        // додаємо лейбли у контейнер з налаштуваннями 
    }
  }
  CONFIGURATIONS_FIELD.addEventListener('change', setValuesForTemplate)  // навішуємо на контейнер прослуховувач подій для запуску функції передачі значень інпутів при їх зміні, у шаблон
}

function templateFourProducts() {   // функція створення шаблону
  document.querySelector('.template-container').innerHTML = ''; // очищаємо контейнер шаблону

  newElement('div', 2, 'class', 'template-four-products', '.template-container')   // створюмо 2 контейнери для шаблону та налаштувань
  document.querySelector('.template-four-products:first-child').classList.add('template-four-products__content')  // додаємо класи контейнерам
  document.querySelector('.template-four-products:last-child').classList.add('template-four-products__configurations')  // додаємо класи контейнерам

  // створюємо контейнери шаблону
  for (let l = 0; l < 5; l++) {
    const CREATE_DIV_AREAS = document.createElement('div')  // створюємо контейнер шаблону
    CREATE_DIV_AREAS.classList.add('template-four-products__areas')  // додаємо клас контейнеру
    if (l == 0) { // задаємо окрему умову для конейнера з лого
      CREATE_DIV_AREAS.classList.add('template-four-products__areas--logo')
      
      const CREATE_IMAGE_FOR_LOGO = document.createElement('img')
      CREATE_IMAGE_FOR_LOGO.classList.add('template-four-products__logo')
      CREATE_IMAGE_FOR_LOGO.setAttribute('id', 'logo')
      CREATE_IMAGE_FOR_LOGO.setAttribute('src', './img/YUGCONTRACT_Logo.png')
      CREATE_DIV_AREAS.appendChild(CREATE_IMAGE_FOR_LOGO)

      const CREATE_PARAGRAPH_FOR_PROMO_NAME = document.createElement('p')
      CREATE_PARAGRAPH_FOR_PROMO_NAME.classList.add('template-four-products__promo-name')
      CREATE_PARAGRAPH_FOR_PROMO_NAME.setAttribute('id', 'promo-name')
      CREATE_DIV_AREAS.appendChild(CREATE_PARAGRAPH_FOR_PROMO_NAME)
    } else { // створюмо умову для контейнерів з товарами, та наповнюємо їх
      CREATE_DIV_AREAS.classList.add(`template-four-products__areas--product-${l}`)

      const CREATE_IMAGE_CONTAINER = document.createElement('div')
      CREATE_IMAGE_CONTAINER.classList.add('template-four-products__image-container')
      CREATE_IMAGE_CONTAINER.classList.add(`template-four-products__image-container--${l}`)

      const CREATE_IMAGE = document.createElement('img')
      CREATE_IMAGE.classList.add('template-four-products__image')
      CREATE_IMAGE.classList.add(`template-four-products__image--${l}`)
      CREATE_IMAGE.setAttribute('id', `photo-${l}`)

      const CREATE_DESCRIPTION_CONTAINER = document.createElement('div')
      CREATE_DESCRIPTION_CONTAINER.classList.add('template-four-products__description-container')
      CREATE_DESCRIPTION_CONTAINER.classList.add(`template-four-products__description-container--${l}`)
      
      const CREATE_PARAGRAPH_NAME = document.createElement('p')
      CREATE_PARAGRAPH_NAME.classList.add('template-four-products__name')
      CREATE_PARAGRAPH_NAME.classList.add(`template-four-products__name--${l}`)
      CREATE_PARAGRAPH_NAME.setAttribute('id', `product-name-${l}`)
      
      const CREATE_SPAN_CODE = document.createElement('span')
      CREATE_SPAN_CODE.classList.add('template-four-products__code')
      CREATE_SPAN_CODE.classList.add(`template-four-products__code--${l}`)
      CREATE_SPAN_CODE.setAttribute('id', `code-${l}`)

      const CREATE_DESCRIPTION = document.createElement('p')
      CREATE_DESCRIPTION.classList.add('template-four-products__description')
      CREATE_DESCRIPTION.classList.add(`template-four-products__description--${l}`)
      CREATE_DESCRIPTION.setAttribute('id', `description-${l}`)

      const CREATE_SPAN_OLD_PRICE = document.createElement('span')
      CREATE_SPAN_OLD_PRICE.classList.add('template-four-products__old-price')
      CREATE_SPAN_OLD_PRICE.classList.add(`template-four-products__old-price--${l}`)
      CREATE_SPAN_OLD_PRICE.setAttribute('id', `old-price-${l}`)

      const CREATE_SPAN_NEW_PRICE = document.createElement('span')
      CREATE_SPAN_NEW_PRICE.classList.add('template-four-products__new-price')
      CREATE_SPAN_NEW_PRICE.classList.add(`template-four-products__new-price--${l}`)
      CREATE_SPAN_NEW_PRICE.setAttribute('id', `new-price-${l}`)

      const CREATE_SPAN_RECOMMENDED_PRICE = document.createElement('span')
      CREATE_SPAN_RECOMMENDED_PRICE.classList.add('template-four-products__recommended-price')
      CREATE_SPAN_RECOMMENDED_PRICE.classList.add(`template-four-products__recommended-price--${l}`)
      CREATE_SPAN_RECOMMENDED_PRICE.setAttribute('id', `recommended-price-${l}`)
  
      CREATE_DIV_AREAS.appendChild(CREATE_IMAGE_CONTAINER)
      CREATE_DIV_AREAS.appendChild(CREATE_DESCRIPTION_CONTAINER)
      CREATE_IMAGE_CONTAINER.appendChild(CREATE_IMAGE)
  
      CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_PARAGRAPH_NAME)
      CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_CODE)
      CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_DESCRIPTION)
      CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_OLD_PRICE)
      CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_NEW_PRICE)
      CREATE_DESCRIPTION_CONTAINER.appendChild(CREATE_SPAN_RECOMMENDED_PRICE)
    }
    document.querySelector('.template-four-products__content').appendChild(CREATE_DIV_AREAS)
  }
// окремо створюємо інпути для лого та назви акції
  const CONFIGURATIONS_FIELD = document.querySelector('.template-four-products__configurations')
  const PRODUCT_CONTAINERS = document.querySelectorAll('.template-four-products__areas')

  const CREATE_LABEL_FOR_LOGO_INPUT = document.createElement('label')
  CREATE_LABEL_FOR_LOGO_INPUT.classList.add('template-four-products__label')
  CREATE_LABEL_FOR_LOGO_INPUT.innerText = 'Додати лого'
  CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL_FOR_LOGO_INPUT)
  
  const CREATE_INPUT_FOR_LOGO = document.createElement('input')
  CREATE_INPUT_FOR_LOGO.classList.add('template-four-products__add-logo')
  CREATE_INPUT_FOR_LOGO.setAttribute('key', 'logo')
  CREATE_INPUT_FOR_LOGO.setAttribute('type', 'file')
  CREATE_LABEL_FOR_LOGO_INPUT.appendChild(CREATE_INPUT_FOR_LOGO)

  const CREATE_LABEL_FOR_PROMO_NAME_INPUT = document.createElement('label')
  CREATE_LABEL_FOR_PROMO_NAME_INPUT.classList.add('template-four-products__label')
  CREATE_LABEL_FOR_PROMO_NAME_INPUT.innerText = 'Додати назву акції'
  CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL_FOR_PROMO_NAME_INPUT)
  
  const CREATE_INPUT_FOR_PROMO_NAME = document.createElement('input')
  CREATE_INPUT_FOR_PROMO_NAME.classList.add('template-four-products__add-promo-name')
  CREATE_INPUT_FOR_PROMO_NAME.setAttribute('key', 'promo-name')
  CREATE_INPUT_FOR_PROMO_NAME.setAttribute('type', 'text')
  CREATE_LABEL_FOR_PROMO_NAME_INPUT.appendChild(CREATE_INPUT_FOR_PROMO_NAME)
// створюємо інпути для кожного товару за шаблоном
  for (let j = 1; j < PRODUCT_CONTAINERS.length; j++) {
    for (let l = 0; l < 7; l++) {
      const CREATE_LABEL = document.createElement('label')  // створюємо лейбли для інпутів
      CREATE_LABEL.classList.add('template-four-products__label')  // задаємо лейблам класи
      if (l == 0) {
        CREATE_LABEL.innerText = `Додати назву товару №${j}`  // додамо назву лейбла
        const CREATE_INPUT = document.createElement('input') // створюємо інпути
        CREATE_INPUT.classList.add('template-four-products__add-product-name')  // додаємо клас інпуту
        CREATE_INPUT.setAttribute('type', 'text')  // задаємо тип інпуту
        CREATE_INPUT.setAttribute('key', `product-name-${j}`)  // задаємо ключ інпуту
        CREATE_LABEL.appendChild(CREATE_INPUT)  // додаємо інпути у лейбли
      }
      if (l == 1) {
        CREATE_LABEL.innerText = `Додати код товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-four-products__add-code')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `code-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 2) {
        CREATE_LABEL.innerText = `Додати фото товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-four-products__add-photo')
        CREATE_INPUT.setAttribute('type', 'file')
        CREATE_INPUT.setAttribute('key', `photo-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 3) {
        CREATE_LABEL.innerText = `Додати опис товару №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-four-products__add-description')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `description-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 4) {
        CREATE_LABEL.innerText = `Додати стару ціну №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-four-products__add-old-price')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `old-price-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 5) {
        CREATE_LABEL.innerText = `Додати нову ціну №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-four-products__add-new-price')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `new-price-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      if (l == 6) {
        CREATE_LABEL.innerText = `Додати РРЦ №${j}`
        const CREATE_INPUT = document.createElement('input')
        CREATE_INPUT.classList.add('template-four-products__add-recommended-price')
        CREATE_INPUT.setAttribute('type', 'text')
        CREATE_INPUT.setAttribute('key', `recommended-price-${j}`)
        CREATE_LABEL.appendChild(CREATE_INPUT)
      }
      CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL)              // додаємо лейбли у контейнер з налаштуваннями   
    }
  }

  document.querySelector('.template-four-products__configurations').addEventListener('change', setValuesForTemplate)  // навішуємо на контейнер прослуховувач подій для запуску функції передачі значень інпутів при їх зміні, у шаблон
}

function templateSet() {   // функція створення шаблону
  document.querySelector('.template-container').innerHTML = ''; // очищаємо контейнер шаблону

  newElement('div', 2, 'class', 'template-set', '.template-container')   // створюмо 2 контейнери для шаблону та налаштувань
  document.querySelector('.template-set:first-child').classList.add('template-set__content')  // додаємо класи контейнерам
  document.querySelector('.template-set:last-child').classList.add('template-set__configurations')  // додаємо класи контейнерам
// створюємо контейнери шаблону
  for (let l = 0; l < 7; l++) {
    const CREATE_DIV_AREAS = document.createElement('div')  // створюємо контейнер шаблону
    CREATE_DIV_AREAS.classList.add('template-set__areas')  // додаємо клас контейнеру
    if (l == 0) { // задаємо окрему умову для конейнера з лого
      CREATE_DIV_AREAS.classList.add('template-set__areas--logo')
      
      const CREATE_IMAGE_FOR_LOGO = document.createElement('img')
      CREATE_IMAGE_FOR_LOGO.classList.add('template-set__logo')
      CREATE_IMAGE_FOR_LOGO.setAttribute('id', 'logo')
      CREATE_IMAGE_FOR_LOGO.setAttribute('src', './img/YUGCONTRACT_Logo.png')
      CREATE_DIV_AREAS.appendChild(CREATE_IMAGE_FOR_LOGO)

      const CREATE_PARAGRAPH_FOR_PROMO_NAME = document.createElement('p')
      CREATE_PARAGRAPH_FOR_PROMO_NAME.classList.add('template-set__promo-name')
      CREATE_PARAGRAPH_FOR_PROMO_NAME.setAttribute('id', 'promo-name')
      CREATE_DIV_AREAS.appendChild(CREATE_PARAGRAPH_FOR_PROMO_NAME)
    } else { // створюмо умову для контейнерів з товарами, та наповнюємо їх
      CREATE_DIV_AREAS.classList.add(`template-set__areas--product-${l}`)

      const CREATE_PARAGRAPH_FOR_PRODUCT_NAME = document.createElement('p')
      CREATE_PARAGRAPH_FOR_PRODUCT_NAME.classList.add('template-set__product-name')
      CREATE_PARAGRAPH_FOR_PRODUCT_NAME.setAttribute('id', `name-${l}`)

      const CREATE_SPAN_FOR_PRODUCT_CODE = document.createElement('span')
      CREATE_SPAN_FOR_PRODUCT_CODE.classList.add('template-set__code')
      CREATE_SPAN_FOR_PRODUCT_CODE.setAttribute('id', `code-${l}`)

      const CREATE_DIV_CONTAINER_FOR_PHOTO = document.createElement('div')
      CREATE_DIV_CONTAINER_FOR_PHOTO.classList.add('template-set__image-container')
      
      const CREATE_IMG_FOR_PRODUCT_PHOTO = document.createElement('img')
      CREATE_IMG_FOR_PRODUCT_PHOTO.classList.add('template-set__photo')
      CREATE_IMG_FOR_PRODUCT_PHOTO.setAttribute('id', `photo-${l}`)
      
      const CREATE_PARAGRAPH_FOR_PRODUCT_DESCRIPTION = document.createElement('p')
      CREATE_PARAGRAPH_FOR_PRODUCT_DESCRIPTION.classList.add('template-set__description')
      CREATE_PARAGRAPH_FOR_PRODUCT_DESCRIPTION.setAttribute('id', `description-${l}`)
      
      const CREATE_DIV_FOR_PRICES_CONTAINER = document.createElement('div')
      CREATE_DIV_FOR_PRICES_CONTAINER.classList.add('template-set__prices-container')
      
      CREATE_DIV_AREAS.appendChild(CREATE_PARAGRAPH_FOR_PRODUCT_NAME)
      CREATE_DIV_AREAS.appendChild(CREATE_SPAN_FOR_PRODUCT_CODE)
      CREATE_DIV_AREAS.appendChild(CREATE_DIV_CONTAINER_FOR_PHOTO)
      CREATE_DIV_CONTAINER_FOR_PHOTO.appendChild(CREATE_IMG_FOR_PRODUCT_PHOTO)
      CREATE_DIV_AREAS.appendChild(CREATE_PARAGRAPH_FOR_PRODUCT_DESCRIPTION)
      CREATE_DIV_AREAS.appendChild(CREATE_DIV_FOR_PRICES_CONTAINER)
    }
    document.querySelector('.template-set__content').appendChild(CREATE_DIV_AREAS)
  }
    
    const PRICES_CONTAINERS = document.querySelectorAll('.template-set__prices-container')
    // заповнюємо контейнер з цінами
    for (let k = 0; k < PRICES_CONTAINERS.length; k++) {
      for (let i = 0; i < 3; i++) {
        const CREATE_SPAN_OPTION_NAME = document.createElement('span')
        CREATE_SPAN_OPTION_NAME.classList.add('template-set__prices-names')
        CREATE_SPAN_OPTION_NAME.setAttribute('id', `option-${i+1}-name-${k+1}`)
        const CREATE_SPAN_OPTION_VALUE = document.createElement('span')
        CREATE_SPAN_OPTION_VALUE.classList.add('template-set__prices-values')
        CREATE_SPAN_OPTION_VALUE.setAttribute('id', `option-${i+1}-value-${k+1}`)
        PRICES_CONTAINERS[k].appendChild(CREATE_SPAN_OPTION_NAME)
        PRICES_CONTAINERS[k].appendChild(CREATE_SPAN_OPTION_VALUE)
      }
      const CREATE_SPAN_RECOMMENDED_PRICE_NAME = document.createElement('span')
      CREATE_SPAN_RECOMMENDED_PRICE_NAME.classList.add('template-set__prices-names')
      CREATE_SPAN_RECOMMENDED_PRICE_NAME.classList.add('template-set__recommended-price-names')
      CREATE_SPAN_RECOMMENDED_PRICE_NAME.innerText = 'РРЦ:'
      const CREATE_SPAN_RECOMMENDED_PRICE_VALUE = document.createElement('span')
      CREATE_SPAN_RECOMMENDED_PRICE_VALUE.classList.add('template-set__recommended-price-values')
      CREATE_SPAN_RECOMMENDED_PRICE_VALUE.setAttribute('id', `recommended-price-${k+1}`)
      PRICES_CONTAINERS[k].appendChild(CREATE_SPAN_RECOMMENDED_PRICE_NAME)
      PRICES_CONTAINERS[k].appendChild(CREATE_SPAN_RECOMMENDED_PRICE_VALUE)
    }
// окремо створюємо інпути для лого та назви акції
    const CONFIGURATIONS_FIELD = document.querySelector('.template-set__configurations')

    const CREATE_LABEL_FOR_LOGO_INPUT = document.createElement('label')
    CREATE_LABEL_FOR_LOGO_INPUT.classList.add('template-set__label')
    CREATE_LABEL_FOR_LOGO_INPUT.innerText = 'Додати лого'
    CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL_FOR_LOGO_INPUT)
    
    const CREATE_INPUT_FOR_LOGO = document.createElement('input')
    CREATE_INPUT_FOR_LOGO.classList.add('template-set__add-logo')
    CREATE_INPUT_FOR_LOGO.setAttribute('key', 'logo')
    CREATE_INPUT_FOR_LOGO.setAttribute('type', 'file')
    CREATE_LABEL_FOR_LOGO_INPUT.appendChild(CREATE_INPUT_FOR_LOGO)


    const CREATE_LABEL_FOR_PROMO_NAME_INPUT = document.createElement('label')
    CREATE_LABEL_FOR_PROMO_NAME_INPUT.classList.add('template-set__label')
    CREATE_LABEL_FOR_PROMO_NAME_INPUT.innerText = 'Додати назву акції'
    CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL_FOR_PROMO_NAME_INPUT)
    
    const CREATE_INPUT_FOR_PROMO_NAME = document.createElement('input')
    CREATE_INPUT_FOR_PROMO_NAME.classList.add('template-set__add-promo-name')
    CREATE_INPUT_FOR_PROMO_NAME.setAttribute('key', 'promo-name')
    CREATE_INPUT_FOR_PROMO_NAME.setAttribute('type', 'text')
    CREATE_LABEL_FOR_PROMO_NAME_INPUT.appendChild(CREATE_INPUT_FOR_PROMO_NAME)
// створюємо інпути для кожного товару за шаблоном
    for (let j = 0; j < PRICES_CONTAINERS.length; j++) {
      for (let l = 0; l < 11; l++) {
        const CREATE_LABEL = document.createElement('label')  // створюємо лейбли для інпутів
        CREATE_LABEL.classList.add('template-set__label')  // задаємо лейблам класи
        if (l == 0) {
          CREATE_LABEL.innerText = `Додати назву товару №${j+1}`  // додамо назву лейбла
          const CREATE_INPUT = document.createElement('input') // створюємо інпути
          CREATE_INPUT.classList.add('template-set__add-product-name')  // додаємо клас інпуту
          CREATE_INPUT.setAttribute('type', 'text')  // задаємо тип інпуту
          CREATE_INPUT.setAttribute('key', `name-${j+1}`)  // задаємо ключ інпуту
          CREATE_LABEL.appendChild(CREATE_INPUT)  // додаємо інпути у лейбли
        }
        if (l == 1) {
          CREATE_LABEL.innerText = `Додати код товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-code')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `code-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 2) {
          CREATE_LABEL.innerText = `Додати фото товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-photo')
          CREATE_INPUT.setAttribute('type', 'file')
          CREATE_INPUT.setAttribute('key', `photo-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 3) {
          CREATE_LABEL.innerText = `Додати опис товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-description')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `description-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 4) {
          CREATE_LABEL.innerText = `Додати умову №1 товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-option-name')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `option-1-name-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 5) {
          CREATE_LABEL.innerText = `Додати значення №1 товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-option-value')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `option-1-value-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 6) {
          CREATE_LABEL.innerText = `Додати умову №2 товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-option-name')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `option-2-name-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 7) {
          CREATE_LABEL.innerText = `Додати значення №2 товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-option-value')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `option-2-value-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 8) {
          CREATE_LABEL.innerText = `Додати умову №3 товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-option-name')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `option-3-name-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 9) {
          CREATE_LABEL.innerText = `Додати значення №3 товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-option-value')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `option-3-value-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        if (l == 10) {
          CREATE_LABEL.innerText = `Додати РРЦ товару №${j+1}`
          const CREATE_INPUT = document.createElement('input')
          CREATE_INPUT.classList.add('template-set__add-recommended-price')
          CREATE_INPUT.setAttribute('type', 'text')
          CREATE_INPUT.setAttribute('key', `recommended-price-${j+1}`)
          CREATE_LABEL.appendChild(CREATE_INPUT)
        }
        CONFIGURATIONS_FIELD.appendChild(CREATE_LABEL)          // додаємо лейбли у контейнер з налаштуваннями       
      }
    }

    CONFIGURATIONS_FIELD.addEventListener('change', setValuesForTemplate)  // навішуємо на контейнер прослуховувач подій для запуску функції передачі значень інпутів при їх зміні, у шаблон



}

function setValuesForTemplate(event) {  // функція для передачі значень з інпутів у шаблон
  const TARGET = event.target  // записуємо елемент на якому відбулася подія
  const GET_TYPE = TARGET.getAttribute('type')  // отримуємо значення типу інпуту, для подальшої обробки значення
  const GET_KEY = TARGET.getAttribute('key')  // отримуємо ключ з інпуту для знаходження відповідного елемента у шаблоні за id
  const FIND_ELEMENT_BY_KEY = document.getElementById(GET_KEY) // знаходимо відповідний елемент

  if (GET_TYPE === 'text') {  // якщо інпут має тип текст,
    FIND_ELEMENT_BY_KEY.innerText = TARGET.value  // отримуємо його значення
  } 

  if (GET_TYPE === 'file') {  // якщо інпут має тип файл,
    const INPUT = TARGET.files[0];
    const READER  = new FileReader();  // використовуєтся, щоб прочитати вміст файлу
    
    READER.onloadend = function () {
      FIND_ELEMENT_BY_KEY.src = READER.result;
    }
    
    if (INPUT) {
      READER.readAsDataURL(INPUT);  // використовуєтся, щоб прочитати вміст файлу
    } else {
      FIND_ELEMENT_BY_KEY.src = "";  // передаємо шлях до файлу
    }
  }

}
