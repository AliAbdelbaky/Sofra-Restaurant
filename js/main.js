// Rate icons



//contact-us status

$(document).ready(function () {
    'use strict';
    $('.my-account form .ratio h5 span').on('click', function () {
        $(this).toggleClass(' blue-bg');
    });
});


//upper Bar active
$(document).ready(function () {
    'use strict';
    $('.upper-bar a').on('click', function () {
        $('.upper-bar a').removeClass('active');
        $('.upper-bar a').addClass('active')
    });
});

//DatePicker
$(document).ready(function () {
    'use strict';
    $('#dateRangePicker').datepicker({
        format: 'mm/dd/yyyy'
    });
});

//owelCarousel
$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: true,
    autoplay: false,
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
})



//owel images overlay

$(document).ready(function () {
    'use strict';
    $(".more-food .carousel .owl-carousel .owl-item img").hover(
        function () {
            $('.more-food .carousel .owl-carousel .owl-item .overlay').fadeIn(500).siblings().stop();
        },
        function () {
            $('.more-food .carousel .owl-carousel .owl-item .overlay').fadeOut(500);
        });
});


