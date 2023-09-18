document.addEventListener('DOMContentLoaded', function () {
    const searchField = document.querySelector('.header__search img');
    const search = document.querySelector('.header__search input');
    search.addEventListener('focus', () => {
        document.querySelector('.header__search').classList.add('header__search_active');
    })
    search.addEventListener('blur', (e) => {
        document.querySelector('.header__search').classList.remove('header__search_active');
    })
    searchField.addEventListener('click', () => {
        search.focus();
    })
    // Бургер меню
    // const menuBtn = document.querySelector('.burger-btn');
    // const menu = document.querySelector('.burger-menu');
    // const body = document.querySelector('body');


    // const toggleMenu = function () {
    //     menuBtn.classList.toggle('active');
    //     menu.classList.toggle('active');
    //     body.classList.toggle('burger-active')
    // }

    // menuBtn.addEventListener('click', toggleMenu);


    //Переходы к якорным ссылкам
    // const menuLinks = document.querySelectorAll('.menuLinks a');
    // menuLinks.forEach((link) => {
    //     link.addEventListener('click', (e) => {
    //         e.preventDefault();

    //         const targetId = link.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);

    //         if (body.classList.contains('burger-active')) {
    //             menuBtn.classList.remove('active');
    //             menu.classList.remove('active');
    //             body.classList.remove('burger-active')
    //         }
    //         targetElement.scrollIntoView({
    //             behavior: 'smooth',
    //         });
    //     });
    // });

    //уменьшить хедер при скроле 
    // const header__row = document.querySelector('.header__row');
    // const scrollThreshold = 200; // Количество пикселей, при котором хедер будет уменьшаться
    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset > scrollThreshold) {
    //         header__row.classList.add('small');
    //     } else {
    //         header__row.classList.remove('small');
    //     }
    //     });
    //Появление блоков анимация
    // function createObserverAndAnimate(blocks, callback) {
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.4,
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry, index) => {
    //             if (entry.isIntersecting) {
    //                 callback(entry.target, index);
    //                 observer.unobserve(entry.target);
    //             }
    //         });
    //     }, options);

    //     blocks.forEach((block) => {
    //         observer.observe(block);
    //     });
    // }

    // function animateBlock(block, index) {
    //     setTimeout(() => {
    //         block.classList.add('active');
    //     }, index * 300);
    // }

    // const audienceBlocks = document.querySelectorAll('.audience__item');
    // const speakerBlocks = document.querySelectorAll('.speaker__row div');

    // createObserverAndAnimate(audienceBlocks, animateBlock);
    // createObserverAndAnimate(speakerBlocks, animateBlock);
    //слайдеры
    jQuery('.second-cards').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: false,
        autoplay: false,
        centerMode: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    jQuery('.recommend-cards-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        infinite: false,
        autoplay: false,
        centerMode: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});

