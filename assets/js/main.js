(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	Mobile Menu
    4.  Hero Slider
    5.  Services Filter
    6. Testimonials Slider
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
        heroSlider();
        stickyHeader();
        aosScroll();
    });

    // Document Ready Function
    $(document).ready(function () {
        mobileMenu();
        ServiceFilter();
        testSlider();
        stickyHeader();
        searchForm();
    });

    // Window Resize Function
    $(window).on('resize', function () {
        mobileMenu();
        stickyHeader();
    });

    // Window Scroll Function
    $(window).on('scroll', function () {

    });

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    } // preloaderSetup

    // ========================== Mobile Menu ==========================
    function mobileMenu() {
        var outputElem = $('#mobile_menu');
        $('#slick_menu').slicknav({
            appendTo: outputElem,
            label: ''
        });
    }

    // ========================== HeroSlider ==========================
    function heroSlider() {
        var slider = $('.hero-slider');
        slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10300,
            smartSpeed: 568,
            mouseDrag: false,
            margin: 0,
            nav: true,
            items: 1,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            animateOut: 'fadeOutUp',
            animateIn: 'fadeIn',
            onTranslate: translateAnim,
            onTranslated: translatedAnim
        });

        // Add Animation Globaly
        slider.find('[data-animation]').each(function () {
            var animation = $(this).data('animation');
            $(this).addClass(animation + ' animated')
        })

        // Animation Duration
        slider.find('[data-duration]').each(function () {
            var duration = $(this).data('duration');
            $(this).css('animation-duration', duration);
        })

        // Animation Dealy
        slider.find('[data-delay]').each(function () {
            var delay = $(this).data('delay');
            $(this).css('animation-delay', delay);
        })

        // Translate Animation
        function translateAnim(event) {
            var layer = $(event.target).find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).removeClass(animation + ' animated').css('opacity', '0');
            })

        }
        // TranslateD Animation
        function translatedAnim(event) {

            var layer = $(event.target).find('.owl-item.active').find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).addClass(animation + ' animated').css('opacity', '1');
            })
        }
    }

    // ========================== ServiceFilter ==========================

    function ServiceFilter() {
        // init Isotope
        var $grid = $('.service-filter-items');
        $grid.isotope({
            // options
        });
        // filter items on button click
        $('.service-filter-nav').on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    }

    // ========================== Testimonials Slider ==========================
    function testSlider() {
        var slider = $('.test-slider');
        // Slider init
        slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10300,
            smartSpeed: 568,
            margin: 0,
            dots: true,
            items: 1,
            onTranslate: translateAnim,
            onTranslated: translatedAnim
        });

        // Add Animation Globaly
        slider.find('[data-animation]').each(function () {
            var animation = $(this).data('animation');
            $(this).addClass(animation + ' animated')
        })

        // Animation Duration
        slider.find('[data-duration]').each(function () {
            var duration = $(this).data('duration');
            $(this).css('animation-duration', duration);
        })

        // Animation Dealy
        slider.find('[data-delay]').each(function () {
            var delay = $(this).data('delay');
            $(this).css('animation-delay', delay);
        })

        // Translate Animation
        function translateAnim(event) {
            var layer = $(event.target).find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).removeClass(animation + ' animated').css('opacity', '0');
            })

        }
        // TranslateD Animation
        function translatedAnim(event) {

            var layer = $(event.target).find('.owl-item.active').find('[data-animation]');

            layer.each(function () {
                var animation = $(this).data('animation');
                $(this).addClass(animation + ' animated').css('opacity', '1');
            })
        }
    }


    // ========================== Sticky Header ==========================

    function stickyHeader() {
        var stickyE = $('.Sticky-nav');
        var stickyH = $('.header-top.Sticky-nav');

        // Mobile Menu Sticky
        var wind = $(window).width();

        if (wind <= 991) {
            $('.header-top').addClass('Sticky-nav');
            $('.header-menu ').parents('.sticky-wrap').hide();
        } else {
            $('.header-top').removeClass('Sticky-nav');
            $('.header-menu ').parents('.sticky-wrap').show();
        }

        stickyNav(stickyE);
        stickyNav(stickyH);

        function stickyNav(sticky) {
            if (typeof sticky !== "undefined") {
                var win = $(window),
                    stickyHeight = sticky.outerHeight();

                // Can't read property 'Console Error Fix'
                if (sticky.length) {
                    var stickyOffset = sticky.offset().top;
                }

                // Controll The Jumping Behavour
                sticky.wrap('<div class="sticky-wrap"></div>');
                $('.sticky-wrap').height(stickyHeight);

                // Fixed the position
                win.on('scroll', function () {
                    var scrollPos = win.scrollTop();

                    if (scrollPos >= stickyOffset) {
                        sticky.addClass('sticky');
                    } else {
                        sticky.removeClass('sticky');
                    }
                })

            }
        }


    }


    // ========================== Search Form ==========================

    function searchForm() {
        var form = $('#search_form');
        var icon = $('.search-icon');

        icon.on("click", function (e) {
            form.slideToggle();
            e.stopPropagation();
            e.preventDefault();
        });

        $(document).on("click", function (e) {
            if (!(e.target.closest('#search_form'))) {
                $(form).slideUp();
            }
        });

        form.on('submit', function (e) {
            e.preventDefault();
        })

    }

    // ========================== Scroll Animation ==========================

    function aosScroll() {
        AOS.init({
            offset: 80,
            duration: 600
        });
    }





})(jQuery); // End of use strict