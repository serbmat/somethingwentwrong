$(document).ready(function() {
    "use strict";

    /* ========================================== 
    Animate loader off screen
    ========================================== */

    $('#loader').fadeOut('slow');



    /*==============================================================
      testimonial slider
    ==============================================================*/

    $('.test-monial').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

    $('.brand-icon').owlCarousel({
        loop: true,
        nav: false,
        margin: 15,
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    $('.blog-slider').owlCarousel({
        loop: true,
        nav: false,
        margin: 30,
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    /* ========================================== 
     ProgressBar
    ========================================== */

    var skills = $(".skills");
    var id = skills.attr("id");

    function animateProgressBar() {
        $(".progres").css("width", function() {
            return $(this).attr("aria-valuenow") + "%";
        });
    }

    var waypoint = new Waypoint({
        element: document.getElementById(id),
        handler: function(direction) {
            animateProgressBar();
        },
        offset: "75%"
    });

    /* ========================================== 
     portfolio
    ========================================== */
    $('#portfolio').imagesLoaded(function() {

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active");
        });

        var $grid = $('.gallery').isotope({
            // options options
            itemSelector: '.items',
            layoutMode: 'fitRows'
        });
        // images have loaded


    });

    /* ========================================== 
     countup
    ========================================== */

    function animateCounter() {
        $(".counter-value").each(function() {
            var $this = $(this),
                countTo = $this.attr("data-count");
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {
                    duration: 500,
                    easing: "swing",
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                }
            );
        });
    }

    var counterId = $("#counter");
    var waypoint1 = new Waypoint({
        element: counterId,
        handler: function(direction) {
            animateCounter();
        },
        offset: "75%"
    });

    /*==============================================================
      Full Screen Height Of Page
    ==============================================================*/

    resizefullscreen();

    /*==============================================================
      Bottom To Top Scroll
    ==============================================================*/

    $(window).scroll(function() {
        animateCounter();
        if ($(this).scrollTop() > 150) {
            $('#scroll').fadeIn("slow");
        } else {
            $('#scroll').fadeOut("slow");
        }
    });

    $('#scroll').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});

$(window).on('load', function() {
    $('#portfolio').imagesLoaded(function() {

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active");
        });

        var $grid = $('.gallery').isotope({
            // options options
            itemSelector: '.items',
            layoutMode: 'fitRows'
        });
        // images have loaded
    });
});

/*==============================================================
  Product Details  Click Events
==============================================================*/

$('.index-tab ul li').on("click", function() {
    $('li').removeClass("active");
    $(this).addClass("active");
});

/*==============================================================
    Fullscreen Height
  ==============================================================*/

function resizefullscreen() {
    var minheight = $(window).height();
    $(".fullscreen").css('min-height', minheight);
}

$(window).resize(function() {
    resizefullscreen();
});


/* ========================================== 
Should be equal the the height of the header
========================================== */

window.onscroll = function() {
    stickyheader()
};

var header = document.getElementById("collapsibleNavbar");
if (header != undefined) {
    var sticky = header.offsetTop;

    function stickyheader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

$('.navigation-menu').onePageNav({
    scrollSpeed: 750,
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 85, //Height of Navigation Bar
    currentClass: 'active',
    filter: ':not(.btn-very-small)'
});

/* ========================================== 
  Instagram feed
  ========================================== */

if ($('#instaFeed-style3').length != 0) {

    var instaFeedStyle1 = new Instafeed({
        target: 'instaFeed-style3',
        "edge_liked_by": {
            "count": 821544
        },
        get: 'user',
        userId: 12349984504,
        limit: 6,
        accessToken: '12349984504.1677ed0.fea9b78a358046f3ace9907eb39ef749',
        resolution: 'standard_resolution',
        error: {
            template: '<div class="col-12"><span class=text-center>No Images Found</span></div>'
        },
        template: '<div class="col-xl-2 col-lg-2 col-md-2 col-4 padding-left-0px padding-right-0px instafeed-style"><a class="insta-link" href="{{link}}" target="_blank"><img src="{{image}}" class="insta-image img-fluid"/></a><div class="insta-caption"><div class="insta-icon"><span><i class="fab fa-instagram"></i></div><div class="insta-counts"><span><i class="far fa-heart"></i><span class="count-number">{{likes}}</span></span><span><i class="far fa-comment"></i><span class="count-number">{{comments}}</span></span></div></div></div>'
    });
    instaFeedStyle1.run();
}

$("#navbar > button.menu").on("click", function() {
    $('.landing-header').toggleClass('open');
    $(this).toggleClass('open').next('.navbar-collapse').toggleClass('open');
    $(this).parents().siblings().find('.navbar-collapse').removeClass('open');
});