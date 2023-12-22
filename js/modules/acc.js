const items = document.querySelectorAll('.questions__item');
const buttons = document.querySelectorAll('.questions__btn');
const textWrapper = document.querySelectorAll('.questions__text-wrapper');

let heightWrapper = 0;

textWrapper.forEach((elem) => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn,index) => {
    btn.addEventListener('click', ({target}) => {
        for (let i = 0; i < textWrapper.length; i++){
            if(i === index) {
                textWrapper[i].classList.toggle('item_active');
                textWrapper[i].style.height = 
                    textWrapper[i].classList.contains('item_active') ?
                    `${heightWrapper}px` : '';
            } else {
                textWrapper[i].classList.remove('item_active');
                textWrapper[i].style.height = '';
            }
        }
        if (target.matches('.questions__btn_violet')) {
            buttons.forEach(btn => {
                if (btn === target) {
                    btn.classList.toggle('questions__btn_violet-active');
                    //btn.classList.toggle('questions__btn_white-active');
                } else {
                    btn.classList.remove('questions__btn_violet-active');
                    //btn.classList.remove('questions__btn_white-active');
                }
            })
        }
        if (target.matches('.questions__btn_white')) {
            buttons.forEach(btn => {
                if (btn === target) {
                    // btn.classList.toggle('questions__btn_violet-active');
                    btn.classList.toggle('questions__btn_white-active');
                } else {
                    // btn.classList.remove('questions__btn_violet-active');
                    btn.classList.remove('questions__btn_white-active');
                }
            })
        }
    })
})

