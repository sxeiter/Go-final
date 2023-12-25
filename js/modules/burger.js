const createBurgerMenu = () => {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="burger-menu">
    <ul class="burger__list">
      <li class="burger__item">залы</li>
      <li class="burger__item">О нас</li>
      <li class="burger__item">Бронь</li>
      <li class="burger__item">отзывы</li>
      <li class="burger__item">Контакты</li>
    </ul>
  </div>
    `)
}

const burgerMenuBtn = document.querySelector('.header__nav-burger')

burgerMenuBtn.addEventListener('click', createBurgerMenu);
