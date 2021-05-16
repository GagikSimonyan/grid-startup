const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const li = document.querySelectorAll('.header__list li')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

li.forEach((item) => {
  item.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
      burger.classList.add('active');
      menu.classList.add('active');
    } else {
      burger.classList.remove('active');
      menu.classList.remove('active');
    }
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});
