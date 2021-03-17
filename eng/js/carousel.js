$('.owl-slider-donation').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(".owl-gallery").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

$('.owl-project-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/* temp carousel js*/
$(".hero-slider").owlCarousel({
    items: 3,
    margin: 10,
    lazyLoad: true,
    loop: true,
    autoplayTimeout: 6000,
    singleItem: true,
    autoWidth: true,
    navigation: true,

});
/* end of temp carousel js*/