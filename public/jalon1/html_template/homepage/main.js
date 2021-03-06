$(window).on('load', e => {
    $('.preloader').fadeIn();
    $('.predloader').fadeOut();
})

var swiper, swiper2, swiper3, swiper4;
$(window).on('load', e => {
    $.ajax({
        url: 'https://imdb-api.com/en/API/MostPopularMovies/k_rapxhaf0',
        method: 'get',
        beforeSend: function () {
            $(".preloader").fadeIn();
        },
        complete: function () {
            $('.preloader').fadeOut();
        },
        success: function (resp) {
            for (let i = 0; i < 10; i++) {
                $('.swiper-wrapper').append(`<div class="swiper-slide tile-${i}"></div>`);
                $(`.tile-${i}`).append(`<img src="${resp.items[i].image}" />`);
            };
            swiper = new Swiper(".mySwiper1", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            for (let i = 10; i < 20; i++) {
                $('.swiper2 .swiper-wrapper').append(`<div class="swiper-slide tile-${i}"></div>`);
                $(`.tile-${i}`).append(`<img src="${resp.items[i].image}" />`);
            };
            swiper2 = new Swiper(".mySwiper2", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            for (let i = 20; i < 30; i++) {
                $('.swiper2 .swiper-wrapper').append(`<div class="swiper-slide tile-${i}"></div>`);
                $(`.tile-${i}`).append(`<img src="${resp.items[i].image}" />`);
            };
            swiper3 = new Swiper(".mySwiper3", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            for (let i = 30; i < 40; i++) {
                $('.swiper2 .swiper-wrapper').append(`<div class="swiper-slide tile-${i}"></div>`);
                $(`.tile-${i}`).append(`<img src="${resp.items[i].image}" />`);
            };
            swiper4 = new Swiper(".mySwiper4", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }
    })
})
