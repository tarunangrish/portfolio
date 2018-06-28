"use strict";
function GetHeightCss() {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var css = "";
    var $window = $(window);
    var windowsize = $window.width();
    if (windowsize > 767) {
        var pad = 0;
    } else {
        var pad = 0;
    }
    var availableheight = h - pad;
    css = '.height-one{ height: ' + availableheight + 'px;}';
    var cssEle = document.getElementById('heightStyle');
    if (cssEle == null) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute("id", "heightStyle");
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    } else {
        cssEle.innerHTML = css;
    }
}
GetHeightCss();
$(window).on("resize", function() {
    GetHeightCss();
});
var equalheight = function(container) {
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function() {
        $el = $(this);
        $($el).height('auto')
        topPosition = $el.position().top;
        if (currentRowStart != topPosition) {
            for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPosition;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}
$(window).load(function() {
    equalheight('.equal-height > div');
});
$(window).resize(function() {
    equalheight('.equal-height > div');
});
document.addEventListener('DOMContentLoaded', function() {
    new Typed('.home_title #subtitle', {
        strings: ['Sweet child o mine', 'I like to do UI Designing, Animation and Prototyping.', 'I deliver beautiful and usable designs for Websites and Apps.'],
        typeSpeed: 30,
        backSpeed: 20,
        smartBackspace: true,
        loop: true
    });
});
$(window).load(function() {
    $('#loading').hide();
});
(function($) {
    $(document).ready(function() {
        var worksgrid = $('#portfolio-grid');
        $('a', filters).on('click', function() {
            var selector = $(this).attr('data-filter');
            $('.current', filters).removeClass('current');
            $(this).addClass('current');
            worksgrid.isotope({
                filter: selector
            });
            return false;
        });
        $(window).on('resize', function() {
            var windowWidth = Math.max($(window).width(), window.innerWidth),
                itemWidht = $('.grid-sizer').width(),
                itemHeight = Math.floor(itemWidht * 0.95),
                itemTallHeight = itemHeight * 2;
            if (windowWidth > 500) {
                $('.portfolio-item', worksgrid).each(function() {
                    if ($(this).hasClass('tall')) {
                        $(this).css({
                            height: itemTallHeight
                        });
                    } else if ($(this).hasClass('wide')) {
                        $(this).css({
                            height: itemHeight
                        });
                    } else if ($(this).hasClass('wide-tall')) {
                        $(this).css({
                            height: itemTallHeight
                        });
                    } else {
                        $(this).css({
                            height: itemHeight
                        });
                    }
                });
            } else {
                $('.portfolio-item', worksgrid).each(function() {
                    if ($(this).hasClass('tall')) {
                        $(this).css({
                            height: itemTallHeight
                        });
                    } else if ($(this).hasClass('wide')) {
                        $(this).css({
                            height: itemHeight / 2
                        });
                    } else if ($(this).hasClass('wide-tall')) {
                        $(this).css({
                            height: itemHeight
                        });
                    } else {
                        $(this).css({
                            height: itemHeight
                        });
                    }
                });
            }
            worksgrid.isotope();
        }).resize();
        $('.popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            image: {
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Tarun Angrish</small>';
                }
            }
        });
    });
})(jQuery);
