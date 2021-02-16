function initMap() {
    // Styles a map in night mode.
    const map = new google.maps.Map(document.getElementById("map-view"), {
        center: { lat: 29.3753229, lng: 47.9736454 },
        zoom: 12,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }]
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }]
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }]
            }
        ]
    });
    new google.maps.Marker({
        position: { lat: 29.3753229, lng: 47.9736454 },
        map,
        title: "Hello World!"
    });
}

$('.is-zakat-calc').on('click', function(){
    $('#zakat-content-1').addClass('is-show');
    $('#zakat-content-1').removeClass('is-hide');
    $('#slider-donation').addClass('is-hide');
});

$('.zakat-content .close').on('click', function () {
   $('#zakat-content-1').addClass('is-hide');
   $('#zakat-content-1').removeClass('is-show');
   $('#zakat-content-2').addClass('is-hide');
   $('#zakat-content-2').removeClass('is-show');
   $('#slider-donation').removeClass('is-hide');
   $('.js-zakat-total').removeClass('show');
   $('.js-zakat-step-2-button').removeClass('hide');
});

$('.is-step-1').on('click', function(){
   $('#zakat-content-1').addClass('is-hide');
   $('#zakat-content-1').removeClass('is-show');
   $('#zakat-content-2').addClass('is-show');
   $('#zakat-content-2').removeClass('is-hide');
});

$('.is-step-2').on('click', function(){
    $('.js-zakat-total').addClass('show');
    $('.js-zakat-step-2-button').addClass('hide');
});

$('.is-step-back-2').on('click', function(){
    $('#zakat-content-1').addClass('is-show');
    $('#zakat-content-1').removeClass('is-hide');
    $('#zakat-content-2').addClass('is-hide');
    $('#zakat-content-2').removeClass('is-show');
});

$('.is-reset').on('click', function(){
    $('#zakat-content-1').addClass('is-show');
    $('#zakat-content-1').removeClass('is-hide');
    $('#zakat-content-2').addClass('is-hide');
    $('#zakat-content-2').removeClass('is-show');
    $('.js-zakat-step-2-button').removeClass('hide');
    $('.js-zakat-total').removeClass('show');
});

$('.is-load-more').on('click', function(){
    $('.js-load-more-project').addClass('show');
    $('.load-more').addClass('hide');
});

$('.pin').on('hover', function(){
    $('.is-country-detail').addClass('show');
});

$('.pin').hover(
    function(){ $('.is-country-detail').addClass('show') },
    function(){ $('.is-country-detail').removeClass('show') }
)

document.getElementById('next-slide').addEventListener('click', function(){
    $('.owl-gallery').trigger('next.owl.carousel');
});

document.getElementById('prev-slide').addEventListener('click', function(){
    $('.owl-gallery').trigger('prev.owl.carousel');
});

