const callbackBtn = document.querySelector('.header__button-btn');
const modal = document.querySelector('.modal');
const modalSubmit = document.querySelector('.modal__submit');
const modalForm = document.querySelector('.modal__form');
const overlayModal = document.querySelector('.modal__overlay');

callbackBtn.addEventListener('click', () => {
    modal.classList.add('modal-open');
});

overlayModal.addEventListener('click', (e) => {
    const target = e.target;
    if (target === overlayModal || target.closest('.modal__close-btn')) {
        modal.classList.remove('modal-open');
      }
});

modalSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    modalForm.reset();
    modal.classList.remove('modal-open');
});