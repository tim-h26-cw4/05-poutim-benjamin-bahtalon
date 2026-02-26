import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.js-container');

    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.js-article');

    const btnorders = this.element.querySelectorAll('.js-confirm');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
    }

    for (let i = 0; i < btnorders.length; i++) {
      const btnorder = btnorders[i];
      btnorder.addEventListener('click', this.sendOrders.bind(this));
    }
  }
  sendOrders() {
    const images = this.element.querySelectorAll('.js-image');
    console.log(images);
    let poutinecount = 0;
    for (let i = 0; i < images.length; i++) {
      console.log(images);
      const image = images[i];
      if (image.classList.contains('is-active')) {
        poutinecount = poutinecount + 1;
      }
    }
    console.log(images);
    const parapoutine = document.createElement('p');
    parapoutine.innerText = `Nombre totale de poutine(s) : ${poutinecount}`;
    console.log(parapoutine);
    this.container.appendChild(parapoutine);
  }
}
