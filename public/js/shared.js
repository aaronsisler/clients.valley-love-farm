$(document).ready(function () {
    $('#currentYear').text(new Date().getFullYear());
});

function resetActiveListItem() {
    $('.tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
}

function appendLi(item) {
    let h4 = document.createElement('h4');
    h4.innerHTML = item.title;
    let h5 = document.createElement('h5');
    h5.innerHTML = item.price;
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.appendChild(h4);
    li.appendChild(h5);
    return li;
}

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
