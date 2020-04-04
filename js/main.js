$(document).ready(function($) {

    $(document).on('click', ".js-media", function(e){
        e.preventDefault();
        if ($('.js-media').hasClass('js-media-active')) {
            $('.js-media').removeClass('js-media-active');
        }
        else {
            $('.js-media').addClass('js-media-active');
        }
        return false;
    });

    $(document).on('click', ".js-header-row-info-col", function(e){
        e.preventDefault();
        if ($('.js-header-row-info-col').hasClass('js-header-row-info-col-active')) {
            $('.js-header-row-info-col').removeClass('js-header-row-info-col-active');
        }
        else {
            $('.js-header-row-info-col').addClass('js-header-row-info-col-active');
        }
        return false;
    });

    $(document).on('click', ".box-menu__btn", function(e){
        e.preventDefault();
        if ($('.menu-pop-up').hasClass('menu-pop-up-active')) {
            $('.menu-pop-up').removeClass('menu-pop-up-active');
            $('.box-menu__btn').removeClass('box-menu__btn-active');
        }
        else {
            $('.menu-pop-up').addClass('menu-pop-up-active');
            $('.box-menu__btn').addClass('box-menu__btn-active');
        }
        return false;
    });

    $(document).on('click', ".btn-close-menu", function(e){
        e.preventDefault();
        $('.menu-pop-up').removeClass('menu-pop-up-active');
        $('.box-menu__btn').removeClass('box-menu__btn-active');
        return false;
    });

    $('a.fancy-modal').fancybox({
        'padding': 0,
        'overlayOpacity': 0.5,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none'
    });

    function sayHi() {
        $(".loader-wrapper").addClass("loader-wrapper-hidden");
        $(".wrapper").attr("style","z-index: 3; opacity: 1;");
    }
    setTimeout(sayHi, 2000);

    // Fixing Webkit that not clearing input/textarea when get focus
    $(function(){
        if ($.browser.webkit) {
            $('input, textarea').on('focus',function(){
                if ( $(this).attr('placeholder') ) $(this).data('placeholder', $(this).attr('placeholder')).removeAttr('placeholder');
            }).on('blur', function(){
                if ( $(this).data('placeholder') ) $(this).attr('placeholder', $(this).data('placeholder')).removeData('placeholder');
            });
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

    const lazyLoad = function() {
        if (active === false) {
            active = true;

            setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function(image) {
                            return image !== lazyImage;
                        });

                        if (lazyImages.length === 0) {
                            document.removeEventListener("scroll", lazyLoad);
                            window.removeEventListener("resize", lazyLoad);
                            window.removeEventListener("orientationchange", lazyLoad);
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
});


document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.b-lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});
