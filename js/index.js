// Бургер меню

// 1. Объявляем переменные.
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
// 2. Вешаем обработчик событий при клике, и показываем боковое меню.
burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
});
// 3. Вешаем обработчик событий чз цикл forEach, по клику на ссылку меню, скрол разрешается, меню скрывается, бургер возвращается в исходное положение.
menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    });
});

// Показ блоков по клику
// 1. Объявляеем переменные.
let articlesMore = document.querySelector('.articles-more');
let articles = document.querySelectorAll('.articles__item');
// 2. Вешаем обработчик событий при клике на кнопку "Показать еще/See more", который открывает блоки Артиклов.
articlesMore.addEventListener('click', function() {
    articles.forEach(function(el) {
        el.classList.toggle('articles__item--visible');
    });
// 3. Скрываем поскле клика кнопку "Показать еще/See more".
    articlesMore.classList.toggle('articles-center-hidden');

    // Вариант спикера - метод "closet" - articlesMore.closest('articles-center').classList.toggle('articles-center-hidden');
});

