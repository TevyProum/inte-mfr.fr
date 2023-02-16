(($) => {
    $('.about .owl-carousel').owlCarousel({
        dots: true,
        nav: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },
            600: {
                items: 2,
                margin: 40,
            },
            992: {
                items: 3,
                margin: 56,
            }
        },
    });

    $('.quote .owl-carousel').owlCarousel({
        dots: true,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        items: 1
    });

    $('.quote-columns .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.-quote',
        items: 1
    });

    $('.background-image .owl-carousel').owlCarousel({
        dots: true,
        nav: false,
        items: 1
    });

    $('.partner-bloc .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.-partner',
        responsive: {
            0: {
                items: 1.3,
                center: true,
                loop: true,
            },
            600: {
                items: 2,
                center: false,
                loop: false,
            },
            992: {
                items: 4,
                slideBy: 4
            }
        },
    });

    $('.sectors .owl-carousel').owlCarousel({
        dots: false,
        center: false,
        loop: false,
        nav: true,
        navContainer: '.-sectors',
        responsive: {
            0: {
                items: 1.3,
                center: true,
                loop: true,
                margin: 16
            },
            992: {
                items: 2,
                margin: 24
            },
            1200: {
                items: 3,
                margin: 24
            }
        },
    });

    $('.gallery .owl-carousel').owlCarousel({
        dots: false,
        center: true,
        loop: true,
        nav: true,
        navContainer: '.-gallery',
        responsive: {
            0: {
                items: 1.3,
                center: true,
                loop: true,
                margin: 16
            },
            600: {
                items: 2.5,
                margin: 16
            },
            992: {
                items: 2.5,
                margin: 32
            }
        },
    });

    $('.news-bloc__secondary .-mobile .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.-mobnews',
        items: 1,
        margin: 23
    });

    $('.news-bloc__secondary .-desktop .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.-desknews',
        items: 1,
        margin: 46
    });

    $('.testimony .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        navContainer: '.-testimony',
        // loop: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
                margin: 24
            },
            992: {
                items: 2.5,
                margin: 48,
                autoWidth:true
            }
        },
    });

    $('.text-columns .owl-carousel').owlCarousel({
        dots: true,
        nav: false,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
                margin: 16
            },
            600: {
                items: 2,
                margin: 24
            },
            992: {
                items: 3,
                margin: 24,
                mouseDrag: false,
                touchDrag: false,
            }
        },
    });

})(jQuery);