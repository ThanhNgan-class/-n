
$.fn.exists = function () {
    return this.length;
};
$(document).ready(function () {
    if ($(".slick-news").exists()) {
        $('.slick-news').slick({
            vertical: false, // Chay dọc
            slidesToShow: 3, // Số item hiển thị
            slidesToScroll: 1, // Số item cuộn khi chạy
            autoplay: true, // Tự động chạy
            autoplaySpeed: 3000, // Tốc độ chạy
            speed: 1000, // Tốc độ chuyển slider
            arrows: false, // Hiển thị mũi tên
            dots: false, // Hiển thị dấu chấm
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $('.news-next').on('click', function () {
            $('.slick-news').slick('slickNext');
        });
        $('.news-prev').on('click', function () {
            $('.slick-news').slick('slickPrev');
        });
    }
    if ($(".slick-feedback").exists()) {
        $('.slick-feedback').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        dots: true
                    }
                }
            ]
        });
        $('.news-next').on('click', function () {
            $('.slick-news').slick('slickNext');
        });
        $('.news-prev').on('click', function () {
            $('.slick-news').slick('slickPrev');
        });
    }
});
